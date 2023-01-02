const initialState = [
  {
    name: "iphone 11",
    brand: "Apple",
    price: 59999,
    operatingSystem: "IOS",
    description:
      "The iPhone 11 boasts a gorgeous all-screen Liquid Retina LCD that is water resistant up to 2 metres for up to 30 minutes. Moreover, the ultra-wide 13 mm lens has a 120-degree field of view for four times more scenes, and the 26 mm wide lens provides up to 100% Autofocus in low light.",
    image: "https://m.media-amazon.com/images/I/71i2XhHU3pL._SX466_.jpg",
    id: "iph11",
  },
  {
    name: "iphone 12",
    brand: "Apple",
    price: 69999,
    description:
      "Dive into a world of crystal-clear visuals with this iPhone’s Super Retina XDR Display. This beast of a smartphone packs the A14 Bionic chip to make for blazing-fast performance speeds. On top of that, its Dual-camera System, along with Night Mode, helps you click amazing pictures and selfies even when the lighting isn’t as good as you’d want it to be.",
    operatingSystem: "IOS",
    image: "https://m.media-amazon.com/images/I/71E5zB1qbIL._SL1500_.jpg",
    id: "iph12",
  },
  {
    name: "iphone 13",
    brand: "Apple",
    price: 79999,
    description:
      "The iPhone 13 features a stylish design and innovative features that make it a delight to use. It is equipped with a Dual-camera system that adds an upgrade to the photos and videos that you take. It offers a big boost in battery so that you have enough time to watch content, game, and so on. And, the A15 Bionic helps load graphics-intensive games with ease.",
    operatingSystem: "IOS",
    image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
    id: "iph13",
  },
  {
    name: "iphone 14",
    brand: "Apple",
    price: 89999,
    description:
      "The iPhone 14 features a stylish design and innovative features that make it a delight to use. It is equipped with a Dual-camera system that adds an upgrade to the photos and videos that you take. It offers a big boost in battery so that you have enough time to watch content, game, and so on. And, the A15 Bionic helps load graphics-intensive games with ease.",
    operatingSystem: "IOS",
    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg",
    id: "iph14",
  },
  {
    name: "Pixel 6a",
    brand: "Google",
    price: 31880,
    description:
      "Experience intuitiveness and enjoy seamless operation with smooth transition with the 5G-ready Google Pixel 6a that comes bundled with a myriad of innovative features. Powered by the Google Tensor processor built especially for Pixel enables you to experience seamless juggling and multitasking. Moreover, the powerful battery adapted into this phone gives enormous power to your phone allowing it to run for a prolonged period. Furthermore, with Face Unblur, Magic Eraser, Night Sight, and Real Tone features incorporated into this phone you can capture masterpieces and enjoy impeccable imagery.",
    operatingSystem: "Android",
    image: "https://m.media-amazon.com/images/I/61PW24157AL._SL1500_.jpg",
    id: "pixel6a",
  },
  {
    name: "Pixel 7",
    brand: "Google",
    price: 59990,
    description:
      "Experience smooth operation and brilliant user interface with the 5G-ready Google Pixel 7 smartphone that comes loaded with innovative features. Google Tensor G2 makes the Pixel 7 faster, more efficient, and more secure and it delivers even more helpful features. Furthermore, the Pixel 7 Camera takes incredible photos and videos in stunning colour and detail. It includes Super Res Zoom so that you can get super-sharp close-ups without an extra telephoto lens. Additionally, the Pixel 7's 16.002 cm (6.3) display is super sharp, with rich, vivid colours. And it's fast and responsive for smoother gaming, scrolling, and moving between apps. ",
    operatingSystem: "Android",
    image:
      "https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/l/2/y/-original-imaggswcffkgcupp.jpeg?q=70",
    id: "pixel7",
  },
  {
    name: "Pixel 7 Pro",
    brand: "Google",
    price: 84999,
    description:
      "Experience smooth operation and brilliant user interface with the 5G-ready Google Pixel 7 Pro smartphone that comes loaded with breathtaking features. Google Tensor G2 makes Pixel 7 faster, more efficient, and more secure and it delivers even more helpful features. Furthermore, the Pixel 7 Pro triple rear camera system includes a 5x telephoto lens. The upgraded ultrawide lens with autofocus now powers Macro Focus. Also, the Pixel 7 Pro has a 30x Super Res Zoom for high-quality photos from far away. Moreover, the Pixel 7 Pro's 17.018 cm (6.7) Smooth Display makes everything stunning and immersive. It intelligently adjusts up to 120 Hz for smoother, more responsive performance.",
    operatingSystem: "Android",
    image: "https://m.media-amazon.com/images/I/712JkPUUlRL._AC_SS450_.jpg",
    id: "pixel7pro",
  },
  {
    name: "Pixel 4a",
    brand: "Google",
    price: 31999,
    description:
      "The Google Pixel 4a is more than just another smartphone for your tasks! Its HDR+ will help you take stunning photos. The Night Sight mode with astrophotography is just what you need to click those stunning images of the star-lit skies you have been meaning to capture. This phone also features apps such as the Pixel Recorder app that transcribes speech automatically.",
    operatingSystem: "Android",
    image: "https://m.media-amazon.com/images/I/51+zLzIdUsL._SL1000_.jpg",
    id: "pixel4a",
  },
];

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
