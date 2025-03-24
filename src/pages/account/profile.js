import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Form } from "react-bootstrap";
import HomeHeader from "../../components/partials/Header/header";
import HomeFooter from "../../components/partials/Footer/footer";
import { axiosInstance } from "../../assets/js/config/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

function UserProfile() {
  const canonicalUrl = window.location.href;
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    profilePhoto: null,
    profile_image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];

    // Create a FormData object to send the file
    const formDataForUpload = new FormData();
    formDataForUpload.append("files", file);

    try {
      // Make the API request to upload the file
      const response = await axiosInstance.post(
        "/file-upload",
        formDataForUpload
      );
      const photoUrl = response.data.data.fileURLs[0];

      setFormData((prevData) => ({
        ...prevData,
        profilePhoto: "https://files.fggroup.in/" + photoUrl,
        profile_image: photoUrl,
      }));

      await axiosInstance.post("/account/update-profile", {
        profile_image: photoUrl,
      });

      // Show success toast
      toast.success("Profile photo uploaded successfully");
    } catch (error) {
      console.error("Error uploading photo:", error);
      // Show error toast
      toast.error("Error uploading profile photo");
    }
  };

  const handleRemovePhoto = async () => {
    // Update the state to remove the photo
    setFormData((prevData) => ({
      ...prevData,
      profilePhoto: null,
      profile_image: null,
    }));

    try {
      await axiosInstance.post("/account/update-profile", {
        profile_image: null,
      });
      toast.success("Profile photo removed successfully");
    } catch (error) {
      console.error("Error removing photo:", error);
      toast.error("Error removing profile photo");
    }
  };

  const updateData = async () => {
    try {
      const response = await axiosInstance.post(
        "/account/update-profile",
        formData
      );
      if (response.data.data) {
        getUserData();
        // Show success toast
        toast.success("User data updated successfully");
      } else {
        console.error("Failed to update user data");
        // Show error toast
        toast.error("Error updating user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      // Show error toast
      toast.error("Error updating user data");
    }
  };

  const getUserData = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      const userData = response.data.data;
      if (userData) {
        setFormData((prevData) => ({
          ...prevData,
          user_id: userData.user.uid || "",
          first_name: userData.user.first_name || "",
          last_name: userData.user.last_name || "",
          mobile: userData.user.mobile || "",
          email: userData.user.email || "",
          profilePhoto:
            "https://files.fggroup.in/" + (userData.user.profile_image || ""),
        }));
      }
    } catch (error) {
      console.error("Error in getUserData:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateData();
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Helmet>
        <title>User Profile</title>
        <meta name="description" content="These Are The Diseases Is Can Not Be Controlled By Medicine Only, You Need To Have The Support Of Nutrition, Exercises, Recovery, And Rehab Parts Also." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="User Profile" />
        <meta property="og:description" content="These Are The Diseases Is Can Not Be Controlled By Medicine Only, You Need To Have The Support Of Nutrition, Exercises, Recovery, And Rehab Parts Also." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in" />
        <link rel="canonical" href={{ canonicalUrl }} />
      </Helmet>
      <HomeHeader />
      <Container
        sx={{ textAlign: "start", mt: 4, mb: 4 }}
        style={{ marginTop: "100px" }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            border: "2px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ borderBottom: "1px solid #ddd", display: "inline-block" }}
          >
            User Profile
          </Typography>
          <div
            className="d-md-flex"
            style={{ alignItems: "center", marginBottom: "20px" }}
          >
            <Avatar
              alt="User Photo"
              src={formData.profilePhoto}
              sx={{ width: 100, height: 100, marginRight: "20px" }}
            />
            <div>
              <h2 className="h4-fs" style={{ fontWeight: "bold" }}>
                {formData.first_name} {formData.last_name}
              </h2>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="profile-photo-upload"
                type="file"
                onChange={handlePhotoChange}
              />
              <label htmlFor="profile-photo-upload">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  sx={{ fontSize: { md: "16px", xs: "14px" } }}
                  style={{
                    color: "#fff",
                    borderRadius: "5px",
                    backgroundColor: "#0066ff",
                  }}
                >
                  <PhotoCamera sx={{ mr: 1 }} /> Upload New Photo
                </IconButton>
              </label>
              {formData.profilePhoto && (
                <IconButton
                  color="secondary"
                  onClick={handleRemovePhoto}
                  aria-label="remove picture"
                  sx={{ ml: 1, px: 3 }}
                  style={{
                    color: "#0066ff",
                    borderRadius: "5px",
                    backgroundColor: "#fff",
                    border: "2px solid #0066ff",
                  }}
                >
                  <Typography sx={{ fontSize: { md: "16px", xs: "14px" } }}>
                    Remove
                  </Typography>
                </IconButton>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Form.Label className="label_modal text-center mb-2">
                User ID:
              </Form.Label>
              <Form.Control
                margin="normal"
                name="user_id"
                value={formData.user_id}
                onChange={handleChange}
                className="fr mr-3"
                disabled
              />
            </div>
            <div className="col-md-6">
              <Form.Label className="label_modal text-center mb-2">
                Mobile
              </Form.Label>
              <Form.Control
                label="Mobile Number"
                margin="normal"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="fr mr-3"
                disabled
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <Form.Label className="label_modal text-center mb-2">
                First name
              </Form.Label>
              <Form.Control
                label="First Name"
                margin="normal"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="fr mr-3"
              />
            </div>
            <div className="col-md-6">
              <Form.Label className="label_modal text-center mb-2">
                Last Name
              </Form.Label>
              <Form.Control
                label="Last Name"
                margin="normal"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="fr"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <Form.Label className="label_modal text-center mb-2">
                Email
              </Form.Label>
              <Form.Control
                label="Email"
                margin="normal"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="fr"
              />
            </div>
          </div>
          <Button
            type="submit"
            variant="contained"
            sx={{ px: 3, py: 1, backgroundColor: "#0F70FF", mt: 4 }}
            style={{ marginRight: "10px" }}
          >
            Save Changes
          </Button>
        </form>
      </Container>
      <HomeFooter />
    </>
  );
}

export default UserProfile;
