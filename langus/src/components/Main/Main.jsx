import React from 'react';
import MainCard from '../MainCard';
import Cards from '../Cards';
import StudyCards from '../StudyCards';
import Progress from '../Progress';
import style from './style.module.scss';

export default function Main() {
  return (
    <>
    <div className={`${style.main} ${style.dgrid}`}>
    
    <section className={`${style.mainconteiner}`}>
    <div className={`${style.groupinfo} ${style.card2}`}><MainCard/></div></section>
    <section><Cards/></section>
    <section><StudyCards/></section>
    <section><Progress/></section>
    </div>
          </>
  )
}

/*<section class="main-container">
          <div class="top-bar margin-b">
            <h1 class="title">Dashboard</h1>
            <button class="btn place-items-center">
              <i class="ri-menu-3-line open-menu-icon"></i>
            </button>
          </div>
          <div class="task-container d-grid margin-b">
            <div class="exam card-1">
              <p class="deadline">Сегодня</p>
              <h2 class="exam-title" id="today"></h2>

              <div class="start-testing-container d-flex"></div>
            </div>
            <div class="task-container-2 d-grid">
              <div class="homework card-1">
                <i class="ri-checkbox-circle-line check-mark"></i>
                <h4>Homework</h4>
                <p>For today's lesson</p>
              </div>
              <div class="reading card-1">
                <i class="ri-checkbox-circle-line check-mark"></i>
                <h4>Reading</h4>
                <p>250 words per week</p>
              </div>
            </div>
          </div>
          <div class="group-task-container d-grid margin-b">
            <div class="group-info card-2">
              <div class="container">
                <canvas id="myChart" width="600" height="400"></canvas>
              </div>
            </div>
          </div>
        </section>
        <section class="secondary-container">
          <h2 class="calendar">My calendar</h2>

          <div id="calendar"></div>
        </section>*/

