import React from "react";
import FgiitHeader from "../components/partials/Header/fgiitheader";
import FgiitFooter from "../components/partials/Footer/fgiitfooter";
import { Helmet } from "react-helmet";

function CancellationPolicy() {
  const canonicalUrl = window.location.href;
  return (
    <>
      <Helmet>
        <title>Cancellation Policy | FG Group</title>
        <meta name="description" content="Read the cancellation policy very well as per the policy meals order are only available via online transfers." />
        <meta name="keyword" content="" />
        <meta property="og:title" content="Cancellation Policy | FG Group" />
        <meta property="og:description" content="Read the cancellation policy very well as per the policy meals order are only available via online transfers." />
        <meta property="og:image" content="https://fggroup.in/assets/images/logo/fg_group.webp" />
        <meta property="og:url" content="https://fggroup.in/cancellation-policy" />
        <link rel="canonical" href={{ canonicalUrl }} />
        <meta name="google-site-verification" content="qoYI59Yoq-GDH-dgwroLkQ3BURusdVprLz66uhF3-NY" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K2X4NWNEP1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K2X4NWNEP1');`}
        </script>
      </Helmet>
      <FgiitHeader />
      <section className="margintop">
        <div className="container-fluid">
          <div className="container">
            <div className="covid text-center">
              <h1>Cancellation Policy</h1>
              <div className="thm-bg-clr dector mb-0"></div>
            </div>
            <div className="describe">
              <p>
                We do not accept any cancellation requests. Please make prior
                decision before you pay for any digital/online service or
                product.
              </p>

              <p>
                To be eligible for a return, your item must be unused and in the
                same condition that you received it. It must also be in the
                original packaging.
              </p>
              <p>
                Several types of goods are exempt from being returned.
                Perishable goods such as food, flowers, newspapers or magazines
                cannot be returned. We also do not accept products that are
                intimate or sanitary goods, hazardous materials, or flammable
                liquids or gases.
              </p>
              <p>
                Additional non-returnable items: Gift cards Downloadable
                software products Some health and personal care items
              </p>
              <p>
                To complete your return, we require a receipt or proof of
                purchase.
              </p>
              <p>Please do not send your purchase back to the manufacturer.</p>
              <p>
                There are certain situations where only partial refunds are
                granted: (if applicable) Book with obvious signs of use CD, DVD,
                VHS tape, software, video game, cassette tape, or vinyl record
                that has been opened. Any item not in its original condition, is
                damaged or missing parts for reasons not due to our error. Any
                item that is returned more than 30 days after delivery
              </p>
              <p>
                Refunds (if applicable) Once your return is received and
                inspected, we will send you an email to notify you that we have
                received your returned item. We will also notify you of the
                approval or rejection of your refund. If you are approved, then
                your refund will be processed, and a credit will automatically
                be applied to your credit card or original method of payment,
                within a certain amount of days.
              </p>
              <p>
                Late or missing refunds (if applicable) If you haven't received
                a refund yet, first check your bank account again. Then contact
                your credit card company, it may take some time before your
                refund is officially posted. Next contact your bank. There is
                often some processing time before a refund is posted. If you've
                done all of this and you still have not received your refund
                yet, please contact us at info@fggroup.in.
              </p>
              <p>
                <br />
                <h2 className="h4-fs">Sale items (if applicable)</h2>
                <br /> Only regular priced items may be refunded, unfortunately
                sale items cannot be refunded.
                <br />
                <br />
                <h2 className="h4-fs">Exchanges (if applicable)</h2>
                <br /> We only replace items if they are defective or damaged.
                If you need to exchange it for the same item, send us an email
                at info@fggroup.in and send your item to: A- 301, Ambrosia
                Business Hub, VIP Road, beside SMC Garden, Vesu, Surat, Gujarat
                395007.
                <br />
                <br />
                <h2 className="h4-fs">Gifts</h2>
                <br /> If the item was marked as a gift when purchased and
                shipped directly to you, you'll receive a gift credit for the
                value of your return. Once the returned item is received, a gift
                certificate will be mailed to you. If the item wasn't marked as
                a gift when purchased, or the gift giver had the order shipped
                to themselves to give to you later, we will send a refund to the
                gift giver and he will find out about your return.
                <br />
                <br />
                <h2 className="h4-fs">Shipping</h2>
                <br /> To return your product, you should mail your product to:
                A- 301, Ambrosia Business Hub, VIP Road, beside SMC Garden,
                Vesu, Surat, Gujarat 395007. You will be responsible for paying
                for your own shipping costs for returning your item. Shipping
                costs are non-refundable. If you receive a refund, the cost of
                return shipping will be deducted from your refund. Depending on
                where you live, the time it may take for your exchanged product
                to reach you, may vary. If you are shipping an item over 200/-
                Rs, you should consider using a trackable shipping service or
                purchasing shipping insurance. We don't guarantee that we will
                receive your returned item.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FgiitFooter />
    </>
  );
}

export default CancellationPolicy;
