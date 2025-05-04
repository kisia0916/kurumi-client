import React from 'react';
import "./NavigationBar.css";
import NavigationButton from './NavigationButton/NavigationButton';

function NavigationBar() {
  return (
    <div className='NavigationMain flex'>
        <div className='w-full h-11 NavigationButtons flex justify-around m-auto'>
            <NavigationButton title='ホーム' icon='/Icons/house.svg' isSelect={false} url='/'/>
            <NavigationButton title='マップ' icon='/Icons/map-pinned.svg' isSelect={true} url='/map'/>
            <NavigationButton title='スタンプラリー' icon='/Icons/stamp.svg' isSelect={false} url='/stamp-rally'/>
            <NavigationButton title='食べ物' icon='/Icons/utensils.svg' isSelect={false} url='/food'/>
            <NavigationButton title='タイムテーブル' icon='/Icons/calendar-days.svg' isSelect={false} url='/timetable'/>
        </div>
    </div>
  );
}

export default NavigationBar;