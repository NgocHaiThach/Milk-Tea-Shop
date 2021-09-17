import React from 'react';
import Images from '../../constant/images';
import './style.css'

Footer.propTypes = {};

function Footer(props) {
    return (
        <footer class="footer">
            <div class="grid wide">
                <div class="row">
                    <div class="col l-2-4 m-4 c-6">
                        <h3 class="footer__heading">Chăm sóc khách hàng</h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Trung tâm trợ giúp</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">NgocHai Mail</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col l-2-4 m-4 c-6">
                        <h3 class="footer__heading">Về tickid</h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Giới thiệu</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Tuyển dụng</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Điều khoản</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col l-2-4 m-4 c-6">
                        <h3 class="footer__heading">Danh mục</h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Trang điểm mặt</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Trang điểm môi</a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">Trang điểm mắt</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col l-2-4 m-4 c-6">
                        <h3 class="footer__heading">Theo dõi chúng tôi</h3>
                        <ul class="footer-list">
                            <li class="footer-item">
                                <a href="" class="footer-item__link">
                                    <i class="footer-item__icon fab fa-facebook"></i>
                                    Facebook
                                </a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">
                                    <i class="footer-item__icon fab fa-instagram"></i>
                                    Instagram
                                </a>
                            </li>
                            <li class="footer-item">
                                <a href="" class="footer-item__link">
                                    <i class="footer-item__icon fab fa-linkedin"></i>
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col l-2-4 m-8 c-12">
                        <h3 class="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                        <div class="footer__dowload">
                            <img src={Images.QR_CODE} alt="Download QR Coed" class="footer__download-qr" />
                            <div class="footer__download-apps">
                                <a href="" class="footer__download-apps-link">
                                    <img src={Images.APP_STORE} alt="App Store" class="footer__download-app-img" />
                                </a>
                                <a href="" class="footer__download-apps-link">
                                    <img src={Images.GG_PLAY} alt="Google Play" class="footer__download-app-img" />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_bottom">
                <div class="grid wide">
                    <p class="footer__copyright">© 2021 - Bản quyền thuộc về HaiThachNgoc</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;