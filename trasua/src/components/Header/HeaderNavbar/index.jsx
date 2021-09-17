import React from 'react';
import Images from '../../../constant/images';
import './style.css'

HeaderNavbar.propTypes = {

};

function HeaderNavbar(props) {
    return (
        <nav className="header__navbar hide-on-mobile-tablet">
            <ul className="header__navbar-list">
                <li className="header__navbar-item header__navbar-item--has-qr header__navbar-item--separate">
                    Vào cửa hàng trên ứng dụng TNH-Shop
                    {/* <!-- BEGIN HEADER QR CODE --> */}
                    <div className="header__qr">
                        <img src={Images.QR_CODE} alt="QR Code" className="header_qr-img" />
                        <div className="header__qr-apps">
                            <a href="" className="header__qr-link">
                                <img src={Images.GG_PLAY} alt="Google Play" className="header__qr-download-img" />
                            </a>
                            <a href="" className="header__qr-link">
                                <img src={Images.APP_STORE} alt="App Store" className="header__qr-download-img" />
                            </a>
                        </div>
                    </div>
                    {/* <!-- END HEADER QR CODE --> */}
                </li>
                <li className="header__navbar-item header__navbar-item--separate">
                    <a className="header__navbar-item header__navbar-icon-link" href="tel:0345751443">
                        <i className="header__navbar-icon fas fa-phone-alt"></i>
                        0345751443
                    </a>
                </li>
                <li className="header__navbar-item">
                    <a className="header__navbar-item header__navbar-icon-link" href="mailto:ngchai2410@gmail.com">
                        <i className="header__navbar-icon fas fa-envelope"></i>
                        ngchai2410@gmail.com
                    </a>
                </li>
            </ul>

            <ul className="header__navbar-list">
                <li className="header__navbar-item header__navbar-item--has-notify">
                    <a href="" className="header__navbar-item-link">
                        <i className="header__navbar-icon far fa-bell"></i>
                        Thông báo
                    </a>
                    {/* <!-- BEGIN NOTIFY --> */}
                    <div className="header__notify">
                        <header className="header__notify-header">
                            <h3>Thông báo mới nhận</h3>
                        </header>
                        <ul className="header__notify-list">
                            <li className="header__notify-item header__notify-item--viewed">
                                <a href="" className="header__notify-link">
                                    <img src={Images.NOTIFY1} alt="notify" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Xác thực chính hãng các sản phẩm nguồn gốc Ohui</span>
                                        <span className="header__notify-description">HiddenTag là giải pháp xác thực hành chính hãng bằng công nghệ tiên tiến nhất hiện nay</span>
                                    </div>
                                </a>
                            </li>

                            <li className="header__notify-item header__notify-item--viewed">
                                <a href="" className="header__notify-link">
                                    <img src={Images.NOTIFY2} alt="notify" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Sale Sốc bộ dưỡng Ohui The First Tái tạo trẻ hóa da SALE OFF 70%</span>
                                        <span className="header__notify-description">Giá chỉ còn 375.000 (giá gốc 1.250.000 vnd)</span>
                                    </div>
                                </a>
                            </li>

                            <li className="header__notify-item">
                                <a href="" className="header__notify-link">
                                    <img src={Images.NOTIFY3} alt="notify" className="header__notify-img" />
                                    <div className="header__notify-info">
                                        <span className="header__notify-name">Ohui chính thức ra mắt dòng son lì mới  THE FIRST GENITURE LIPSTICK</span>
                                        <span className="header__notify-description">Một làn môi căng mềm, quyến rũ với sắc màu nổi bật luôn là điều mà các quý cô ao ước</span>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <footer className="header__notify-footer">
                            <a href="" className="header__notify-footer-btn">Xem tất cả</a>
                        </footer>
                    </div>
                    {/* <!-- END NOTIFY --> */}
                </li>
                <li className="header__navbar-item">
                    <a href="" className="header__navbar-item-link">
                        <i className="header__navbar-icon far fa-question-circle"></i>
                        Trợ giúp
                    </a>
                </li>
                <li id="header__navber-btn-register" className="header__navbar-item header__navbar-item--strong header__navbar-item--separate">Đăng ký</li>
                <li id="header__nav-btn-login" className="header__navbar-item header__navbar-item--strong">Đăng nhập</li>
            </ul>
        </nav>
    );
}

export default HeaderNavbar;