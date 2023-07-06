console.log(1)
chrome.storage.onChanged.addListener(() => {
    console.log(2)
    
    const contents = document.querySelector('p')
    // console.log(chrome.storage.sync)
    // contents.innerHTML = chrome.storage.sync.str

    chrome.storage.sync.get(['str'], function(res) {
        // const content = document.querySelector('p');
        contents.innerHTML = res.str;
      })
    
});

document.addEventListener('DOMContentLoaded', () => {

    const contents = document.querySelector('p')
    chrome.storage.sync.get(['str'], function(res) {
        // const content = document.querySelector('p');
        contents.innerHTML = res.str;
      })

    const clearButton = document.getElementById('clearButton')
    clearButton.addEventListener('click', () => {
        console.log(3)
        chrome.storage.sync.set({ str: '' }, function() {
          console.log('CLEARED STORAGE');
          const contents = document.querySelector('p')
          contents.innerHTML = '';
        });
    })
})


// function clearStore() {

// }



