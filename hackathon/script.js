

// const selectedItems = document.querySelectorAll('div');
// selectedItems.forEach(function(item) {
//   item.addEventListener('mouseenter', hoverHandler)
//   item.addEventListener('mouseleave', hoverOffHandler)

// });

// function hoverOffHandler(e) {
//     console.log('hover off')
//     e.target.style.backgroundColor = ''
// }

// function hoverHandler(e) {
//   console.log('hoverHandler triggered');
//   e.target.style.backgroundColor = 'blue';
// }
chrome.storage.sync.str = ''

document.addEventListener('mouseup', (e) => {

    const selectedText = window.getSelection().toString().trim();
    if (selectedText === '') return;
    
    chrome.storage.sync.get(['str'], (res) => {
      const existingStr = res.str || '';
    
      const updatedStr = existingStr + '<br>' +  '• ' +  selectedText + '<br>' ;

      chrome.storage.sync.set({ str: updatedStr }, function() {
        console.log(updatedStr);
      })
    })
})


// (existingStr ? '\n' : '')