import React from 'react';

const StudentStats = () => {
    return (
        <section className="margintop">
            <div className="container-fluid p-0">
                <div className="bg-full-bd height-respo"
                    style={{
                        height: '250px', padding: '30px 0px', backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fgiit/student-happy.webp)`, backgroundAttachment: 'initial'
                    }}>
                    <div className="container">
                        <div className="col-12">
                            <div className="demoo mb-4 text-center">
                                <h2 className='h2-fs' style={{ color: '#fff' }}>Our Students</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 text-center">
                                <span className="counter"
                                    style={{ fontWeight: 'bold', lineHeight: '1.42857143', color: '#fff', fontSize: '40px', fontFamily: 'Nunito,sans-serif' }}>11000</span>
                                <i className="fas fa-plus" style={{ fontWeight: 'bold', color: '#fff', fontSize: '33px' }}></i>
                                <div className="tabata">
                                    <p style={{ color: '#fff', fontWeight: 'bold' }} className="mt-3">Total online student</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 text-center">
                                <span className="counter"
                                    style={{ fontWeight: 'bold', lineHeight: '1.42857143', color: '#fff', fontSize: '40px', fontFamily: 'Nunito,sans-serif' }}>3500</span>
                                <i className="fas fa-plus" style={{ fontWeight: 'bold', color: '#fff', fontSize: '33px' }}></i>
                                <div className="tabata">
                                    <p style={{ color: '#fff', fontWeight: 'bold' }} className="mt-3">total offline student</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 text-center">
                                <span className="counter"
                                    style={{ fontWeight: 'bold', lineHeight: '1.42857143', color: '#fff', fontSize: '40px', fontFamily: 'Nunito,sans-serif' }}>6250</span>
                                <i className="fas fa-plus" style={{ fontWeight: 'bold', color: '#fff', fontSize: '33px' }}></i>
                                <div className="tabata">
                                    <p style={{ color: '#fff', fontWeight: 'bold' }} className="mt-3">total self learning Student</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 text-center">
                                <span className="counter"
                                    style={{ fontWeight: 'bold', lineHeight: '1.42857143', color: '#fff', fontSize: '40px', fontFamily: 'Nunito,sans-serif' }}>20750</span>
                                <i className="fas fa-plus" style={{ fontWeight: 'bold', color: '#fff', fontSize: '33px' }}></i>
                                <div className="tabata">
                                    <p style={{ color: '#fff', fontWeight: 'bold' }} className="mt-3">total Student</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentStats;
