/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Title from 'src/common/Title'

const StoriesCardMobile = () => {
  return (
    <div className="flex flex-col gap-4 lg:hidden">
    <div className="flex flex-col gap-2">
      
    <img src='Rasol.JPG' className="max-h-[540px]"/>


        <Title label="India’s most beautiful  place all must visit" />
        <p >
            <span>
                This place is situated in Himachal Pradesh's
                Kangra{" "}
            </span>
            <span className="text-primary-700 cursor-pointer">
                Read More...
            </span>
        </p>
    </div>
    <div className="flex flex-col gap-2">
    <img src='Rasol.JPG' className="max-h-[540px]"/>

        <Title label="India’s most beautiful  place all must visit" />
        <p className="">
            <span>
                This place is situated in Himachal Pradesh's
                Kangra{" "}
            </span>
            <span className="text-primary-700 cursor-pointer">
                Read More...
            </span>
        </p>
    </div>
    <div className="flex flex-col gap-2">
    <img src='Rasol.JPG' className="max-h-[540px]"/>

        <Title label="India’s most beautiful  place all must visit" />
        <p className="">
            <span>
                This place is situated in Himachal Pradesh's
                Kangra{" "}
            </span>
            <span className="text-primary-700 cursor-pointer">
                Read More...
            </span>
        </p>
    </div>
</div>  )
}

export default StoriesCardMobile