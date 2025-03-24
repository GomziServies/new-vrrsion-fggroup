import React from 'react';


const Achievement = () => {

    return (
        <section className="margintop d-none d-md-block">
            <div className="container-fluid p-0">
                <div className="bg-full-bd height-respo"
                    style={{ padding: '30px 0px', backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/fwg/gym-img.webp`, backgroundAttachment: 'fixed' }}>
                    <div className="container">
                        <div className="col-12">
                            <div className="demoo mb-4 text-center">
                                <h2 className='h2-fs' style={{ color: '#fff' }}>Achievements</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 text-center">
                                <span className="counter"
                                    style={{ fontWeight: 'bold', lineHeight: '1.42857143', color: '#fff', fontSize: '40px', fontFamily: 'Nunito,sans-serif' }}>8000</span>
                                <i className="fas fa-plus" style={{ fontWeight: 'bold', color: '#fff', fontsize: '33px' }}></i>
                                <div className="tabata">
                                    <p style={{ color: '#fff', fontWeight: 'bold' }} className="mt-3">Transformation</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 text-center">
                                <span className="counter"
                                    style={{ fontWeight: 'bold', lineHeight: '1.42857143', color: '#fff', fontSize: '40px', fontFamily: 'Nunito,sans-serif' }}>4000</span>
                                <i className="fas fa-plus" style={{ fontWeight: 'bold', color: '#fff', fontsize: '33px' }}></i>
                                <div className="tabata">
                                    <p style={{ color: '#fff', fontWeight: 'bold' }} className="mt-3">weight loss</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 text-center">
                                <span className="counter"
                                    style={{ fontWeight: 'bold', lineHeight: '1.42857143', color: '#fff', fontSize: '40px', fontFamily: 'Nunito,sans-serif' }}>2000</span>
                                <i className="fas fa-plus" style={{ fontWeight: 'bold', color: '#fff', fontsize: '33px' }}></i>
                                <div className="tabata">
                                    <p style={{ color: '#fff', fontWeight: 'bold' }} className="mt-3">Clinical</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 text-center">
                                <span className="counter"
                                    style={{ fontWeight: 'bold', lineHeight: '1.42857143', color: '#fff', fontSize: '40px', fontFamily: 'Nunito,sans-serif' }}>1000</span>
                                <i className="fas fa-plus" style={{ fontWeight: 'bold', color: '#fff', fontsize: '33px' }}></i>
                                <div className="tabata">
                                    <p style={{ color: '#fff', fontWeight: 'bold' }} className="mt-3">prep coaching</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 text-center">
                                <span className="counter"
                                    style={{ fontWeight: 'bold', lineHeight: '1.42857143', color: '#fff', fontSize: '40px', fontFamily: 'Nunito,sans-serif' }}>1000</span>
                                <i className="fas fa-plus" style={{ fontWeight: 'bold', color: '#fff', fontsize: '33px' }}></i>
                                <div className="tabata">
                                    <p style={{ color: '#fff', fontWeight: 'bold' }} className="mt-3">Weight gain</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 text-center">
                                <span className="counter"
                                    style={{ fontWeight: 'bold', lineHeight: '1.42857143', color: '#fff', fontSize: '40px', fontFamily: 'Nunito,sans-serif' }}>50</span>
                                <i className="fas fa-plus" style={{ fontWeight: 'bold', color: '#fff', fontsize: '33px' }}></i>
                                <div className="tabata">
                                    <p style={{ color: '#fff', fontWeight: 'bold' }} className="mt-3">corporate events</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievement;
