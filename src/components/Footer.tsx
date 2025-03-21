import React from 'react'

const Footer = () => {
  return (
    <div className="w-[100vw] mt-[60px] h-[280px] pt-14 pb-10 bg-[#4338ca] flex items-start justify-center text-white ">
    <div className="w-full flex justify-around items-start">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5.83341 1.66667V18.3333M14.1667 1.66667V18.3333M1.66675 10H18.3334M1.66675 5.83334H5.83341M1.66675 14.1667H5.83341M14.1667 14.1667H18.3334M14.1667 5.83334H18.3334M3.48341 1.66667H16.5167C17.5201 1.66667 18.3334 2.48002 18.3334 3.48334V16.5167C18.3334 17.52 17.5201 18.3333 16.5167 18.3333H3.48341C2.4801 18.3333 1.66675 17.52 1.66675 16.5167V3.48334C1.66675 2.48002 2.4801 1.66667 3.48341 1.66667Z"
              stroke="#FAFAFA"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-[#fafafa]  line-[20px] text-[15px]  italic font-[700]">
            Movie Z
          </p>
        </div>

        <p className="text-[14px] font-bold">
          © 2024 Movie Z. All Rights Reserved.
        </p>
      </div>
    <div className='flex gap-20'>
      <div className="flex flex-col gap-3 ">
        <p className="text-[14px] font-bold">Contact Information</p>

        <div className="flex flex-col gap-6">
          <div className="flex justify-start items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.6666 4.66667L8.68658 8.46667C8.48077 8.59562 8.2428 8.66401 7.99992 8.66401C7.75704 8.66401 7.51907 8.59562 7.31325 8.46667L1.33325 4.66667M2.66659 2.66667H13.3333C14.0696 2.66667 14.6666 3.26363 14.6666 4.00001V12C14.6666 12.7364 14.0696 13.3333 13.3333 13.3333H2.66659C1.93021 13.3333 1.33325 12.7364 1.33325 12V4.00001C1.33325 3.26363 1.93021 2.66667 2.66659 2.66667Z"
                stroke="#FAFAFA"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="text-[14px] font-bold">
              <p>Email</p>

              <p>support@movieZ.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_2640_3268)">
                <path
                  d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6495 14.555 13.8196C14.4807 13.9897 14.3716 14.1424 14.2348 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5847 14.608 13.3983 14.6301 13.2134 14.6133C11.1619 14.3904 9.19137 13.6894 7.46004 12.5667C5.84926 11.5431 4.48359 10.1775 3.46004 8.56668C2.33336 6.82748 1.6322 4.84734 1.41337 2.78668C1.39671 2.60233 1.41862 2.41652 1.4777 2.2411C1.53679 2.06567 1.63175 1.90447 1.75655 1.76776C1.88134 1.63105 2.03324 1.52182 2.20256 1.44703C2.37189 1.37224 2.55493 1.33352 2.74004 1.33335H4.74004C5.06357 1.33016 5.37723 1.44473 5.62254 1.6557C5.86786 1.86667 6.02809 2.15964 6.07337 2.48001C6.15779 3.12006 6.31434 3.7485 6.54004 4.35335C6.62973 4.59196 6.64915 4.85129 6.59597 5.1006C6.5428 5.34991 6.41928 5.57875 6.24004 5.76001L5.39337 6.60668C6.34241 8.27571 7.72434 9.65764 9.39337 10.6067L10.24 9.76001C10.4213 9.58077 10.6501 9.45725 10.8994 9.40408C11.1488 9.35091 11.4081 9.37032 11.6467 9.46001C12.2516 9.68571 12.88 9.84227 13.52 9.92668C13.8439 9.97237 14.1396 10.1355 14.3511 10.385C14.5625 10.6345 14.6748 10.9531 14.6667 11.28Z"
                  stroke="#FAFAFA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              <defs>
                <clipPath id="clip0_2640_3268">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div>
              <p className="text-[14px] font-bold">Phone</p>

              <p className="text-[14px] font-bold">+976 (11) 123-4567</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-3 text-[14px] font-bold">
        <p>Follow us</p>

        <div className='flex gap-2'>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>YouTube</p>
        </div>
      </div>

    </div>
    </div>
  </div>

  )
}

export default Footer
