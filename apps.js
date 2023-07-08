window.onload = function() {
  // Code to be executed after all resources have finished loading
  console.log('All resources have finished loading!');
  
  // Your additional code here...
};


const imageSets = [[
  {
    url: 'https://i.imgur.com/KTQRMN4.jpg',
    description: 'Lancaster, Jan 2019.',
    timestamp: new Date('January 29, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/SyQmFvi.jpg',
    description: 'Lancaster University, May 2019.',
    timestamp: new Date('May 2, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/pHEakJM.jpg',
    description: 'Dotombori, Aug 2019.',
    timestamp: new Date('Aug 17, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/RkHVRNK.jpg',
    description: 'Amanohashidate, Aug 2019.',
    timestamp: new Date('Aug 25, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/haZFewH.jpg',
    description: 'Lancaster University, Oct 2019',
    timestamp: new Date('Oct 26, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/ayMFTaA.jpg',
    description: 'Berne, Dec 2019.',
    timestamp: new Date('Dec 29, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/1CnAh7X.jpg',
    description: 'Thanh Hoa, Apr 2020.',
    timestamp: new Date('Apr 9, 2020').getTime()
  },
  {
    url: 'https://i.imgur.com/JWS5BBN.jpg',
    description: 'Ho Chi Minh City, Sep 2022.',
    timestamp: new Date('Sep 15, 2022').getTime()
  },
  {
    url: 'https://i.imgur.com/NeqSryd.jpg',
    description: 'Hanoi, Mar 2023.',
    timestamp: new Date('Mar 18, 2023').getTime()
  },
  {
    url: 'https://i.imgur.com/2NflusC.jpg',
    description: 'Binh Ba, Jul 2017.',
    timestamp: new Date('Jul 29, 2017').getTime()
  },
  {
    url: 'https://i.imgur.com/Z8zGJlp.jpg',
    description: 'Sapa, Sep 2017.',
    timestamp: new Date('Sep 2, 2017').getTime()
  },
  {
    url: 'https://i.imgur.com/eRiT4d1.jpg',
    description: 'Lancaster University, Nov 2018.',
    timestamp: new Date('Nov 13, 2018').getTime()
  },
  {
    url: 'https://i.imgur.com/ca6adwn.jpg',
    description: 'Cau Dien, Aug 2018.',
    timestamp: new Date('Aug 21, 2018').getTime()
  },
  {
    url: 'https://i.imgur.com/wbKwD8B.jpg',
    description: 'Cau Dien, Aug 2018.',
    timestamp: new Date('Aug 21, 2018').getTime()
  },
  {
    url: 'https://i.imgur.com/3kr06Nz.jpg',
    description: 'Lancaster, Jan 2019.',
    timestamp: new Date('Jan 29, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/8sDjFqc.jpg',
    description: 'Salford Quays, Nov 2021.',
    timestamp: new Date('Nov 27, 2021').getTime()
  },
  {
    url: 'https://i.imgur.com/vICcnaG.jpg',
    description: 'Bailrigg Lane, Dec 2021.',
    timestamp: new Date('Dec 2, 2021').getTime()
  },
  {
    url: 'https://i.imgur.com/cpyjJ7f.jpg',
    description: 'Lancaster, Mar 2019.',
    timestamp: new Date('Mar 28, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/KABxJCE.jpg',
    description: 'Llandudno, Apr 2019.',
    timestamp: new Date('Apr 16, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/UmPsZG5.jpg',
    description: 'Lancaster University, Apr 2019.',
    timestamp: new Date('Apr 21, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/EpNDXW6.jpg',
    description: 'Lancaster University, May 2019.',
    timestamp: new Date('May 4, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/6KrABzP.jpg',
    description: 'Lancaster University, May 2019.',
    timestamp: new Date('May 13, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/PSMKXh1.jpg',
    description: 'Lancaster, May 2019.',
    timestamp: new Date('May 21, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/7cWQqC9.jpg',
    description: 'Hanoi, Dec 2022.',
    timestamp: new Date('Dec 12, 2022').getTime()
  },
  {
    url: 'https://i.imgur.com/krl0lPF.jpg',
    description: 'Sapa, Dec 2022.',
    timestamp: new Date('Dec 31, 2022').getTime()
  },
  {
    url: 'https://i.imgur.com/9VUTrEX.jpg',
    description: 'Sapa, Dec 2022.',
    timestamp: new Date('Dec 31, 2022').getTime()
  },
  {
    url: 'https://i.imgur.com/oEeuwYd.jpg',
    description: 'Cau Giay, Jul 2019.',
    timestamp: new Date('Jul 19, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/7O2uk5y.jpg',
    description: 'Ninh Binh, Aug 2019.',
    timestamp: new Date('Aug 2, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/radpWTx.jpg',
    description: 'Kyoto, Aug 2019.',
    timestamp: new Date('Aug 16, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/R9JSBsa.jpg',
    description: 'Osaka, Aug 2019.',
    timestamp: new Date('Aug 17, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/hzaTSu6.jpg',
    description: 'Osaka, Aug 2019.',
    timestamp: new Date('Aug 17, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/i6R5E84.jpg',
    description: 'Kita, Apr 2023.',
    timestamp: new Date('Apr 22, 2023').getTime()
  },
  {
    url: 'https://i.imgur.com/uEO2mRb.jpg',
    description: 'Osaka, Aug 2019.',
    timestamp: new Date('Aug 17, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/ZXex64E.jpg',
    description: 'KIT, Apr 2023.',
    timestamp: new Date('Apr 27, 2023').getTime()
  },
  {
    url: 'https://i.imgur.com/u16qCJd.jpg',
    description: 'Kyoto, May 2023.',
    timestamp: new Date('May 11, 2023').getTime()
  },
  {
    url: 'https://i.imgur.com/ACCq03S.jpg',
    description: 'KIT, May 2023.',
    timestamp: new Date('May 27, 2023').getTime()
  },
  {
    url: 'https://i.imgur.com/98I3m8Q.jpg',
    description: 'Kyoto, Jul 2023.',
    timestamp: new Date('Jul 1, 2023').getTime()
  },
  {
    url: 'https://i.imgur.com/vX7IR8P.jpg',
    description: 'Kyoto, Jul 2023.',
    timestamp: new Date('Jul 6, 2023').getTime()
  },
  {
    url: 'https://i.imgur.com/IJwfaAk.jpg',
    description: 'Ine, Aug 2019.',
    timestamp: new Date('Aug 25, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/ZstCyyc.jpg',
    description: 'Xuong Island, Jun 2018.',
    timestamp: new Date('Jun 29, 2018').getTime()
  },
  {
    url: 'https://i.imgur.com/dfweb4V.jpg',
    description: 'Sakyo, Aug 2019.',
    timestamp: new Date('Aug 26, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/jTw80ij.jpg',
    description: 'Osaka, Sep 2019.',
    timestamp: new Date('Sep 2, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/AIdKCUg.jpg',
    description: 'Hanoi, Sep 2019.',
    timestamp: new Date('Sep 11, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/UDX3W6o.jpg',
    description: 'Tuyen Quang, Sep 2019.',
    timestamp: new Date('Sep 14, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/03Zefut.jpg',
    description: 'Bailrigg Lane, Oct 2019.',
    timestamp: new Date('Oct 8, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/d60K9CR.jpg',
    description: 'Lancsater University, Oct 2019.',
    timestamp: new Date('Oct 28, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/C5HPU3n.jpg',
    description: 'Lancsater University, Nov 2017.',
    timestamp: new Date('Nov 17, 2017').getTime()
  },
  {
    url: 'https://i.imgur.com/G2PomHQ.jpg',
    description: 'Japan, Aug 2019.',
    timestamp: new Date('Aug 25, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/gKtBZXI.jpg',
    description: 'Limmat, Dec 2019.',
    timestamp: new Date('Dec 27, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/r7RE612.jpg',
    description: 'Berne, Dec 2019.',
    timestamp: new Date('Dec 29, 2019').getTime()
  },
  {
    url: 'https://i.imgur.com/3slQkcI.jpg',
    description: 'Grindelwald, Jan 2020.',
    timestamp: new Date('Jan 3, 2020').getTime()
  },
  {
    url: 'https://i.imgur.com/C5HPU3n.jpg',
    description: 'Lancsater University, Jun 2018.',
    timestamp: new Date('Jun 22, 2018').getTime()
  },
  {
    url: 'https://i.imgur.com/KTpfigt.jpg',
    description: 'Low Hill, Feb 2020.',
    timestamp: new Date('Feb 14, 2020').getTime()
  },
  {
    url: 'https://i.imgur.com/CHUQ9LE.jpg',
    description: 'Hoi An, Jul 2018.',
    timestamp: new Date('Jul 18, 2018').getTime()
  },
  {
    url: 'https://i.imgur.com/XhuQJGw.jpg',
    description: 'Ha Long, Sep 2018.',
    timestamp: new Date('Sep 15, 2018').getTime()
  },
  {
    url: 'https://i.imgur.com/jzNHhDM.jpg',
    description: 'Cau Giay, Oct 2020.',
    timestamp: new Date('Oct 1, 2020').getTime()
  },
  {
    url: 'https://i.imgur.com/ksXniKI.jpg',
    description: 'Vietnam, May 2021.',
    timestamp: new Date('May 2, 2021').getTime()
  },
  {
    url: 'https://i.imgur.com/cUquMFg.jpg',
    description: 'Vietnam, May 2021.',
    timestamp: new Date('May 2, 2021').getTime()
  },
  {
    url: 'https://i.imgur.com/mhH4j3X.jpg',
    description: 'Hoan Kiem Lake, Oct 2020.',
    timestamp: new Date('Oct 17, 2020').getTime()
  },
  {
    url: 'https://i.imgur.com/WQ7Bndb.jpg',
    description: 'Lancaster University, Oct 2019.',
    timestamp: new Date('Oct 18, 2019').getTime()
  },
]];


function generateGallery() {
  const randomSet = imageSets[Math.floor(Math.random() * imageSets.length)];

  if (!Array.isArray(randomSet)) {
    console.error('Invalid imageSet: randomSet is not an array');
    return;
  }

  const sortedImages = randomSet.sort((a, b) => a.timestamp - b.timestamp);
  const startIndex = Math.floor(Math.random() * (sortedImages.length - 8));
  const selectedImages = sortedImages.slice(startIndex, startIndex + 9);

  const galleryContainer = document.getElementById('galleryContainer');

  galleryContainer.innerHTML = '';

  selectedImages.forEach((image, index) => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const imgElement = document.createElement('img');
    imgElement.src = image.url;
    imgElement.alt = 'Photo ' + (index + 1);
    imageContainer.appendChild(imgElement);

    const descriptionOverlay = document.createElement('div');
    descriptionOverlay.classList.add('description-overlay');

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description');
    descriptionElement.textContent = image.description;
    descriptionOverlay.appendChild(descriptionElement);

    imageContainer.appendChild(descriptionOverlay);

    galleryContainer.appendChild(imageContainer);
  });
}

// Call the function to generate the initial gallery when the page loads
generateGallery();



