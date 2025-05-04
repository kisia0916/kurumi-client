"use client"
import React from 'react';
import Link from 'next/link';

function NavigationButton(props: { title: string; icon: string; isSelect: boolean; url: string }) {
  return (
    <Link href={props.url} passHref>
      <div className="NavigationButton w-11 h-11">
        <div className="w-full h-full flex relative">
          {props.isSelect ? (
            <div className="w-5 h-5 bg-amber-200 rounded-full absolute inset-0 m-auto z-0"></div>
          ) : null}
          <img src={props.icon} className="w-6 h-6 m-auto z-10" alt={props.title} />
        </div>
      </div>
    </Link>
  );
}

export default NavigationButton;