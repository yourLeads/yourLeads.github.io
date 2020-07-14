
window.addEventListener('DOMContentLoaded', function(){

    ' use strict ';

    const  tabsWrapper = document.querySelector('.tab'),
       tabs = document.querySelectorAll('.tab__item'),
       toggleItem = document.querySelector('.tab__toggle'),
       tabContent = document.querySelectorAll('.tabs__content');


       tabContent[0].style.display = 'block';
    tabsWrapper.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
            if(target.classList.contains('tab__item-click') || 
            target.parentNode.classList.contains('tab__item-click') ){
                toggleItem.classList.add('tab__toggle-active');
                toggleItem.classList.remove('tab__toggle');
                tabContent[0].style.display = 'none';
                tabContent[1].style.display = 'block';
            } else {
                toggleItem.classList.remove('tab__toggle-active');
                toggleItem.classList.add('tab__toggle');
                tabContent[1].style.display = 'none';
                tabContent[0].style.display = 'block';
            }
        });














// let tab = document.querySelector('.tab'),
//     tabss = document.querySelectorAll('.tab__item'),
//     tabContentt = document.querySelectorAll('.carousel');
//     tabsItem = document.querySelectorAll('.tab__item a');


//  function hideContent(b) {
//     for(let i = 0; i < tabContentt.length; i++ ) {
//         tabContentt[i].style.display = 'none';
//     }
//     tabContentt[b].style.display = 'flex';
//  }
//  hideContent(0);

//  function tabAddActive(b) {
//     for(let i = b; i < tabss.length; i++ ) {

//         tabss[i].classList.remove('active');
//     }
//     tabss[b].classList.add('active');
//  }
//  tabAddActive(0);

// tab.addEventListener('click', (e) => {
//     for(let i = 0; i < tabss.length; i++ ) {
//         if(tabss[i] == event.target || tabsItem[i] == event.target) {
//             event.preventDefault();
//             hideContent(i);
//             tabAddActive(i);
//         }
//     }
// });
    // scroll
let anchors = document.querySelectorAll('.scroll'),
    block = document.querySelectorAll('.block-scroll'),
    popup = document.querySelector('.popup'),
    nav = document.querySelector('.nav');

        function scroll(a, b) {
            a.addEventListener('click', function (e) {
                e.preventDefault();
                b.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              });

        }

        scroll(anchors[0], block[0]);
        scroll(anchors[1], block[1]);
        scroll(anchors[2], block[2]);
        scroll(popup, nav);

        // show and hide popupItem
        window.addEventListener('scroll', function() {
            if(window.pageYOffset > 600) {
                popup.classList.add('show');
            } else {
                popup.classList.remove('show'); 
            }
          });
    let   formOverlay = document.querySelector('form'),
      inp = document.querySelectorAll('.over-inp'),
      helpText = document.querySelectorAll('.help'),
      deleteInp2 = document.querySelector('.thanks');

const allBtn = document.querySelectorAll('.btn'),
      overlay = document.querySelector('.overlay'),
      overlayWrap = document.querySelector('.overlay__wrapper'),
      overlayClose = document.querySelectorAll('.overlay__wrapper-close'),
      overlayThanks = document.querySelector('.overlay__thanks');
      

    
    $(document).ready(function(){


      allBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            overlay.style.display = 'block';
            overlayWrap.style.display = 'block';
            overlayWrap.classList.add('transform')
            document.body.style.overflow = 'hidden';
        });
    });
    overlayClose.forEach(item => {
      item.addEventListener('click', () => {
      overlay.style.display = 'none';
      overlayWrap.style.display = 'none';
      document.body.style.overflow = '';
      overlayThanks.style.display = 'block' ? overlayThanks.style.display = 'none' : '';
      clearInput();
      });
    });

    formOverlay.addEventListener('submit', function(event){
      event.preventDefault();
      console.log('d');
                    // бордер и подсказки  при пустой строке
      function addBorder(a, b) {
          if(a.value == '') {
            b.textContent = 'Это обязательное для ввода поле'; 
        }
      }
      addBorder(inp[0], helpText[0]);
      addBorder(inp[1], helpText[1]);
      
      //             // бордер и подсказки  при недостаточном количестве символов
      if(inp[0].value != '' && inp[0].value.length < 2) {
        helpText[0].textContent = 'минимум два символа';
      } 
      //            // проверка поля email на наличие символа @
      if(inp[0].value != '' && inp[1].value != ''  && inp[0].value.length > 2 ) {
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        });
      //   modal.classList.contains('overlay_active');
        // inp.classList.remove('error');
        clearInput();
        overlayWrap.style.display = 'none';
        overlayThanks.style.display = 'block';
      //   modal.classList.remove('overlay_active');
      //   document.body.style.overflow = '';
      } 
      
      
      //             //  удаляем бордер и тест об ошибке при повторном заполнении инпута
      function deleteRepeatBorder(i, b) {
        i.addEventListener('input', function() {
          b.textContent = '';
        });
      }
      deleteRepeatBorder(inp[0], helpText[0]);
      deleteRepeatBorder(inp[1], helpText[1]);
      
      });
  
      function clearInput() {
          function clear(i, b) {
            i.value = '';
            b.textContent = '';
            }
            clear(inp[0], helpText[0]);
            clear(inp[1], helpText[1]);
          }
    });

});