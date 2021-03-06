import React from "react";
import "./styles/navbar.scss";

const Navbar = () => {
  return (
    <header>
      {" "}
      <div className="header__container">
        {" "}
        <form>
          {" "}
          <div className="form__group">
            {" "}
            <input type="text" placeholder="Ask us any question" />{" "}
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.759 13.491 2.625 9.625 2.625C5.759 2.625 2.625 5.759 2.625 9.625C2.625 13.491 5.759 16.625 9.625 16.625Z"
                stroke="#A3A3C2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M18.375 18.375L14.5687 14.5687"
                stroke="#A3A3C2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </svg>{" "}
          </div>{" "}
        </form>{" "}
        <div className="notification">
          {" "}
          <span>
            {" "}
            <svg
              width="38"
              height="18"
              viewBox="0 0 38 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.235 3.48071C11.102 2.36502 10.1525 1.5 9.00098 1.5C7.84947 1.5 6.9 2.36502 6.76693 3.48071C4.88993 4.3316 3.58431 6.22166 3.58431 8.41667V12.1799L2.33144 14.662C2.07964 15.1609 2.4422 15.75 3.00098 15.75H6.87901C7.18788 16.6239 8.02131 17.25 9.00098 17.25C9.98064 17.25 10.8141 16.6239 11.1229 15.75H15.001C15.5598 15.75 15.9223 15.1609 15.6705 14.662L14.4176 12.1799V8.41667C14.4176 6.22166 13.112 4.3316 11.235 3.48071ZM12.9981 12.6964L13.7823 14.25H4.21967L5.00385 12.6964C5.05675 12.5916 5.08431 12.4759 5.08431 12.3585V8.41667C5.08431 6.25355 6.83786 4.5 9.00098 4.5C11.1641 4.5 12.9176 6.25355 12.9176 8.41667V12.3585C12.9176 12.4759 12.9452 12.5916 12.9981 12.6964Z"
                fill="#A3A3C2"
              />{" "}
              <rect x="22" y="1" width="16" height="16" rx="4" fill="#F25A68" />{" "}
              <path
                d="M30.8789 8.24805C31.5312 8.31836 32.0527 8.56445 32.4434 8.98633C32.8379 9.4043 33.0352 9.9375 33.0352 10.5859C33.0352 11.082 32.9141 11.5234 32.6719 11.9102C32.4336 12.293 32.1016 12.5898 31.6758 12.8008C31.2539 13.0117 30.7754 13.1172 30.2402 13.1172C29.7129 13.1172 29.2383 13.0117 28.8164 12.8008C28.3984 12.5898 28.0723 12.2891 27.8379 11.8984C27.6074 11.5039 27.4961 11.0508 27.5039 10.5391H28.8574C28.8574 10.9453 28.9883 11.2754 29.25 11.5293C29.5117 11.7832 29.8496 11.9102 30.2637 11.9102C30.6699 11.9102 31.0059 11.7871 31.2715 11.541C31.5371 11.291 31.6699 10.9609 31.6699 10.5508C31.6699 10.168 31.5527 9.86523 31.3184 9.64258C31.0879 9.41602 30.7773 9.28711 30.3867 9.25586C30.25 9.24023 29.9766 9.23242 29.5664 9.23242H29.1211V8.30664L30.9609 6.49609H27.9609V5.30664H32.666V6.47266L30.8789 8.24805Z"
                fill="white"
              />{" "}
            </svg>{" "}
          </span>{" "}
          <span>
            {" "}
            <svg
              width="1"
              height="24"
              viewBox="0 0 1 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <rect width="1" height="24" fill="#ECEBF5" />{" "}
            </svg>{" "}
          </span>{" "}
          <span>
            {" "}
            <svg
              width="57"
              height="34"
              viewBox="0 0 57 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 33C25.8366 33 33 25.8366 33 17C33 8.16344 25.8366 1 17 1C8.16344 1 1 8.16344 1 17C1 25.8366 8.16344 33 17 33Z"
                stroke="#6837EF"
              />{" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M49 18.0572L51.8619 15.1953C52.1223 14.9349 52.5444 14.9349 52.8047 15.1953C53.0651 15.4556 53.0651 15.8777 52.8047 16.1381L49.4714 19.4714C49.2111 19.7318 48.7889 19.7318 48.5286 19.4714L45.1953 16.1381C44.9349 15.8777 44.9349 15.4556 45.1953 15.1953C45.4556 14.9349 45.8777 14.9349 46.1381 15.1953L49 18.0572Z"
                fill="#696D8C"
              />{" "}
            </svg>{" "}
          </span>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};

export default Navbar;
