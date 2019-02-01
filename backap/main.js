function  closeBlock(event){
  let block  = document.getElementById(event.target.alt);
  block.style.display = 'none';
}

function appendBlock(event) {
  event && event.stopPropagation();
  let listField = $('.list-field');
  const listFieldCount = $('.field').length;
  listField.append(' <div class="field" id="block-' +(listFieldCount + 1) +
      '"   >     <div class="form-group block" >\n' +
      '                           <input placeholder="Заголовок поля">\n' +
      '                           <select onChange="selectTypeBlock(event)" id="block-' + (listFieldCount + 1) +
     '-select"   > <option value="1">Текст - строка</option>' +
      '<option value="2">Текст - абзац</option>'+
      '<option value="3">Один из списка</option> ' +
      '<option value="4">Несколько из списка</option>'+
      '<option value="5">Раскрывающийся список</option>' +
      '                           </select>\n' +
      '                           <img class="icon-close"\n' +
      '                                onclick="closeBlock(event)"\n' +
      '                                title="Закрыть"\n' +
      '                                alt="block-2"\n' +
      '                                src="icons/close.png">\n' +
      '                        </div>\n' +
      '                     </div>')
}

function selectTypeBlock(event) {
  event && event.stopPropagation();
  const idBLock = event.path[2].id;
  const selectTypeIndex = $(`#${idBLock}-select`)[0].options.selectedIndex;
  const fieldBlock = $(`#${idBLock}`);
  switch (selectTypeIndex) {
    case 1:
    case 2:
      fieldBlock.append(' <div class="form-group block" >\n' +
          '                           <input value="Placeholder">\n' +
          '                        </div>\n' +
          '                        <div class="form-group left-block">\n' +
          '                           <span>\n' +
          '                           <input type="checkbox">  Обязательный вопрос\n' +
          '                        </span>\n' +
          '                        </div>')
          break;
    case 3:
    case 4:
    case 5:
      fieldBlock.append('  <div class="form-group block">\n' +
          '                            <textarea  class="custom-textarea" rows="3">\n' +
          '                           Вопрос 1\n' +
          '                           Вопрос 2\n' +
          '                           Вопрос 3</textarea>\n' +
          '                        </div>\n' +
          '                        <div class="form-group left-block">\n' +
          '                        <span>\n' +
          '                        <input type="checkbox">  Обязательный вопрос\n' +
          '                        </span>\n' +
          '                        </div>')
      break;

  }

}
