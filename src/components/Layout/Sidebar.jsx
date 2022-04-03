import React from "react";
import MenuNav from "./MenuNav";
import "./styles/sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <section>
        <div className="sidebar__top">
          <div className="brand">
            <h4>Metacare</h4>
            <p>adeyinka@metacare.app</p>
          </div>
          <div className="toggle">
            click
            {/* {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )} */}
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.3 11.1111C10.012 11.1111 10.708 10.9026 11.3001 10.5119C11.8921 10.1212 12.3535 9.5659 12.626 8.91621C12.8984 8.26652 12.9697 7.55161 12.8308 6.8619C12.6919 6.17219 12.3491 5.53865 11.8456 5.0414C11.3421 4.54415 10.7007 4.20551 10.0023 4.06832C9.30399 3.93113 8.58015 4.00154 7.92234 4.27065C7.26453 4.53976 6.70228 4.99549 6.30671 5.5802C5.91114 6.1649 5.7 6.85233 5.7 7.55556C5.7 8.49855 6.07928 9.40292 6.75442 10.0697C7.42955 10.7365 8.34522 11.1111 9.3 11.1111ZM9.3 5.77778C9.65601 5.77778 10.004 5.88204 10.3 6.07739C10.596 6.27273 10.8267 6.55038 10.963 6.87523C11.0992 7.20008 11.1349 7.55753 11.0654 7.90238C10.996 8.24724 10.8245 8.56401 10.5728 8.81263C10.3211 9.06126 10.0003 9.23058 9.65116 9.29917C9.302 9.36777 8.94008 9.33256 8.61117 9.19801C8.28226 9.06345 8.00114 8.83559 7.80335 8.54324C7.60557 8.25088 7.5 7.90717 7.5 7.55556C7.5 7.08406 7.68964 6.63188 8.02721 6.29848C8.36477 5.96508 8.82261 5.77778 9.3 5.77778ZM16.5 12.8889C17.034 12.8889 17.556 12.7325 18 12.4395C18.4441 12.1465 18.7901 11.73 18.9945 11.2427C19.1988 10.7554 19.2523 10.2193 19.1481 9.70198C19.0439 9.1847 18.7868 8.70955 18.4092 8.33661C18.0316 7.96367 17.5505 7.70969 17.0267 7.6068C16.503 7.5039 15.9601 7.55671 15.4668 7.75854C14.9734 7.96038 14.5517 8.30217 14.255 8.7407C13.9584 9.17923 13.8 9.69481 13.8 10.2222C13.8 10.9295 14.0845 11.6077 14.5908 12.1078C15.0972 12.6079 15.7839 12.8889 16.5 12.8889ZM16.5 9.33333C16.678 9.33333 16.852 9.38547 17 9.48314C17.148 9.58081 17.2634 9.71964 17.3315 9.88206C17.3996 10.0445 17.4174 10.2232 17.3827 10.3956C17.348 10.5681 17.2623 10.7264 17.1364 10.8508C17.0105 10.9751 16.8502 11.0597 16.6756 11.094C16.501 11.1283 16.32 11.1107 16.1556 11.0434C15.9911 10.9762 15.8506 10.8622 15.7517 10.7161C15.6528 10.5699 15.6 10.398 15.6 10.2222C15.6 9.98647 15.6948 9.76038 15.8636 9.59368C16.0324 9.42699 16.2613 9.33333 16.5 9.33333ZM16.5 13.7778C15.5026 13.7789 14.5339 14.1072 13.746 14.7111C12.8645 13.8439 11.7427 13.2539 10.522 13.0155C9.30143 12.7771 8.03669 12.9011 6.8873 13.3717C5.73792 13.8423 4.75537 14.6385 4.06357 15.6599C3.37176 16.6814 3.00168 17.8822 3 19.1111C3 19.3469 3.09482 19.573 3.2636 19.7397C3.43239 19.9064 3.66131 20 3.9 20C4.13869 20 4.36761 19.9064 4.5364 19.7397C4.70518 19.573 4.8 19.3469 4.8 19.1111C4.8 17.9324 5.27411 16.8019 6.11802 15.9684C6.96193 15.1349 8.10653 14.6667 9.3 14.6667C10.4935 14.6667 11.6381 15.1349 12.482 15.9684C13.3259 16.8019 13.8 17.9324 13.8 19.1111C13.8 19.3469 13.8948 19.573 14.0636 19.7397C14.2324 19.9064 14.4613 20 14.7 20C14.9387 20 15.1676 19.9064 15.3364 19.7397C15.5052 19.573 15.6 19.3469 15.6 19.1111C15.6021 18.0697 15.3358 17.0449 14.826 16.1333C15.2237 15.8229 15.7019 15.6294 16.2058 15.5748C16.7097 15.5203 17.219 15.6069 17.6754 15.8249C18.1317 16.0428 18.5168 16.3833 18.7864 16.8072C19.056 17.2312 19.1994 17.7216 19.2 18.2222C19.2 18.458 19.2948 18.6841 19.4636 18.8508C19.6324 19.0175 19.8613 19.1111 20.1 19.1111C20.3387 19.1111 20.5676 19.0175 20.7364 18.8508C20.9052 18.6841 21 18.458 21 18.2222C21 17.0435 20.5259 15.913 19.682 15.0795C18.8381 14.246 17.6935 13.7778 16.5 13.7778Z"
                      fill="#696D8C"
                    />
                  </svg>{" "}
                  <span>Admin</span>
                </a>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12Z"
                    fill="#E5E4EF"
                  />
                </svg>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 0.75H12C14.8995 0.75 17.25 3.10051 17.25 6V12C17.25 14.8995 14.8995 17.25 12 17.25H6C3.10051 17.25 0.75 14.8995 0.75 12V6C0.75 3.10051 3.10051 0.75 6 0.75ZM6.00002 2.25002C3.92895 2.25002 2.25002 3.92895 2.25002 6.00002V12C2.25002 14.0711 3.92895 15.75 6.00002 15.75H12C14.0711 15.75 15.75 14.0711 15.75 12V6.00002C15.75 3.92895 14.0711 2.25002 12 2.25002H6.00002ZM6.51865 8.45877L8.22198 10.1402L11.4133 6.27262C11.6769 5.95313 12.1496 5.90784 12.4691 6.17147C12.7886 6.4351 12.8339 6.9078 12.5703 7.2273L8.85711 11.7273C8.57673 12.0671 8.06525 12.0932 7.75174 11.7837L5.46488 9.52628C5.17009 9.23529 5.16702 8.76042 5.45801 8.46564C5.749 8.17086 6.22386 8.16778 6.51865 8.45877Z"
                      fill="#696D8C"
                    />
                  </svg>

                  <span>Knowledge Base</span>
                </a>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12Z"
                    fill="#E5E4EF"
                  />
                </svg>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 0.75H12C14.8995 0.75 17.25 3.10051 17.25 6V12C17.25 14.8995 14.8995 17.25 12 17.25H6C3.10051 17.25 0.75 14.8995 0.75 12V6C0.75 3.10051 3.10051 0.75 6 0.75ZM6.00002 2.25002C3.92895 2.25002 2.25002 3.92895 2.25002 6.00002V12C2.25002 14.0711 3.92895 15.75 6.00002 15.75H12C14.0711 15.75 15.75 14.0711 15.75 12V6.00002C15.75 3.92895 14.0711 2.25002 12 2.25002H6.00002ZM6.51865 8.45877L8.22198 10.1402L11.4133 6.27262C11.6769 5.95313 12.1496 5.90784 12.4691 6.17147C12.7886 6.4351 12.8339 6.9078 12.5703 7.2273L8.85711 11.7273C8.57673 12.0671 8.06525 12.0932 7.75174 11.7837L5.46488 9.52628C5.17009 9.23529 5.16702 8.76042 5.45801 8.46564C5.749 8.17086 6.22386 8.16778 6.51865 8.45877Z"
                      fill="#696D8C"
                    />
                  </svg>

                  <span>Train SAM</span>
                </a>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12Z"
                    fill="#E5E4EF"
                  />
                </svg>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.3335 2.66653V1.99992C11.3335 1.63173 11.632 1.33325 12.0001 1.33325C12.3683 1.33325 12.6668 1.63173 12.6668 1.99992V2.66653H13.3334C14.438 2.66653 15.3334 3.56196 15.3334 4.66653V6.66653V7.99986V11.3332C15.3334 13.5423 13.5426 15.3332 11.3334 15.3332H4.66675C2.45761 15.3332 0.666748 13.5423 0.666748 11.3332V7.99986V6.66653V4.66653C0.666748 3.56196 1.56218 2.66653 2.66675 2.66653H4.00002V1.99992C4.00002 1.63173 4.2985 1.33325 4.66669 1.33325C5.03488 1.33325 5.33336 1.63173 5.33336 1.99992V2.66653H11.3335ZM2.00002 7.99986V11.3331C2.00002 12.8059 3.19393 13.9998 4.66669 13.9998H11.3334C12.8061 13.9998 14 12.8059 14 11.3331V7.99986H2.00002ZM2.66669 3.9998H4.00002V3.99992C4.00002 4.36811 4.2985 4.66659 4.66669 4.66659C5.03488 4.66659 5.33336 4.36811 5.33336 3.99992V3.9998H11.3335V3.99992C11.3335 4.36811 11.632 4.66659 12.0001 4.66659C12.3683 4.66659 12.6668 4.36811 12.6668 3.99992V3.9998H13.3334C13.7015 3.9998 14 4.29828 14 4.66647V6.66647H2.00002V4.66647C2.00002 4.29828 2.2985 3.9998 2.66669 3.9998Z"
                      fill="#696D8C"
                    />
                  </svg>

                  <span>Agent Inbox</span>
                </a>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12Z"
                    fill="#E5E4EF"
                  />
                </svg>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.00002 0.666687C12.0501 0.666687 15.3334 3.94993 15.3334 8.00002C15.3334 12.0501 12.0501 15.3334 8.00002 15.3334C3.94993 15.3334 0.666687 12.0501 0.666687 8.00002C0.666687 3.94993 3.94993 0.666687 8.00002 0.666687ZM8.00002 2.00002C4.68631 2.00002 2.00002 4.68631 2.00002 8.00002C2.00002 11.3137 4.68631 14 8.00002 14C11.3137 14 14 11.3137 14 8.00002C14 4.68631 11.3137 2.00002 8.00002 2.00002ZM8.00002 3.33335C8.36821 3.33335 8.66669 3.63183 8.66669 4.00002V7.67396L11.4093 9.80712C11.6999 10.0332 11.7523 10.452 11.5263 10.7426C11.3002 11.0333 10.8814 11.0856 10.5907 10.8596L7.59073 8.52626C7.42834 8.39995 7.33335 8.20575 7.33335 8.00002V4.00002C7.33335 3.63183 7.63183 3.33335 8.00002 3.33335Z"
                      fill="#696D8C"
                    />
                  </svg>

                  <span>Help Center</span>
                </a>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12Z"
                    fill="#E5E4EF"
                  />
                </svg>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.5221 15.8175C14.9984 15.9233 15.4233 15.4984 15.3175 15.0221L14.5857 11.7293C15.0749 10.7336 15.3334 9.63481 15.3334 8.50002C15.3334 4.44993 12.0501 1.16669 8.00002 1.16669C3.94993 1.16669 0.666687 4.44993 0.666687 8.50002C0.666687 12.5501 3.94993 15.8334 8.00002 15.8334C9.13481 15.8334 10.2336 15.5749 11.2293 15.0857L14.5221 15.8175ZM13.2949 11.3249C13.2198 11.4654 13.1974 11.6283 13.232 11.7839L13.7886 14.2886L11.2839 13.732C11.1283 13.6974 10.9654 13.7198 10.8249 13.7949C9.96327 14.2557 9.00002 14.5 8.00002 14.5C4.68631 14.5 2.00002 11.8137 2.00002 8.50002C2.00002 5.18631 4.68631 2.50002 8.00002 2.50002C11.3137 2.50002 14 5.18631 14 8.50002C14 9.50002 13.7557 10.4633 13.2949 11.3249ZM6.00002 9.83335C6.7364 9.83335 7.33335 9.2364 7.33335 8.50002C7.33335 7.76364 6.7364 7.16669 6.00002 7.16669C5.26364 7.16669 4.66669 7.76364 4.66669 8.50002C4.66669 9.2364 5.26364 9.83335 6.00002 9.83335ZM11.3334 8.50002C11.3334 9.2364 10.7364 9.83335 10 9.83335C9.26364 9.83335 8.66669 9.2364 8.66669 8.50002C8.66669 7.76364 9.26364 7.16669 10 7.16669C10.7364 7.16669 11.3334 7.76364 11.3334 8.50002Z"
                      fill="#6837EF"
                    />
                  </svg>

                  <span className="last">Analytics</span>
                </a>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12Z"
                    fill="#E5E4EF"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <MenuNav />
    </>
  );
};

export default Sidebar;
