const fs = require('fs');

// random integer between two values where min and max are inclusive
const getRandomInteger = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
};

// generate random date format mm/dd/yy
const getRandomTime = () => {
  const monthDays = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  const validateDoubleDigits = num => (num < 10 ? `0${num}` : num);
  const month = Math.floor(Math.random() * 12) + 1;
  const day = validateDoubleDigits(getRandomInteger(1, monthDays[month] + 1));
  const timeStamp = `${validateDoubleDigits(month)}/${day}/${getRandomInteger(2017, 2019)}`;
  return timeStamp;
};

const writeStream = fs.createWriteStream('sampleDatas/data.json');

const randomDataGene = (start, end, stream, encoding, callback) => {
  let i = start;
  const dataRestaurantName = ['Ledner-Parisian', 'Torp-Dare', 'Stokes and Sons', 'Bergstrom-Heaney', 'Collins LLC', 'Hammes-Corwin', 'Doyle LLC', 'Gusikowski and Sons', 'Wolff, Sawayn and Spinka', 'Beatty-Champlin', 'Morar-Gleichner', 'Satterfield-Grimes', 'Thiel-Johns', 'Brakus-Kuphal', 'Oberbrunner Group', 'Schuppe-Hickle', 'Conroy, McLaughlin and Stark', 'Vandervort LLC', 'Corkery Inc'];
  const dataUsername = ['kmanuele0', 'mstaff1', 'ydubock2', 'hgiraldez3', 'dcluff4', 'dgibke5', 'nsackler6', 'tlillie7', 'whuygen8', 'cgavrieli9', 'ofidelusa', 'ldehnb', 'mmathisc', 'kburneyd', 'dskirlinge', 'abuxsyf', 'gconrardg', 'jcallenderh', 'lmadocjonesi'];
  const dataCity = ['Lexington', 'Las Palmas', 'Chipoka', 'Qi’an', 'Milówka', 'Arneiro', 'Kubangsari', 'Lahuaytambo', 'Radocza', 'Mekarsari', 'Solna', 'Abilay', 'Saratov', 'El Salitre', 'Barranca de Upía', 'Alasmalang', 'Bobrovka', 'Daixi', 'Bébédja'];
  const dataReview = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed tempus odio nec neque porta, nec sagittis lorem ullamcorper.', 'Sed nec odio lacinia, rhoncus sapien letius, bibendum sapien.',
    'Cras ut sem vel lectus rhoncus imperdiet a at leo.', 'Maecenas congue leo at tempor lacinia.', 'Morbi nec felis sagittis, pharetra lorem quis, pretium nulla.', 'Quisque efficitur leo sed lacus egestas sagittis.', 'Donec eu lacus sed lacus elementum bibendum non sed magna.', 'Etiam a risus luctus, lacinia dui in, varius lorem.', 'Etiam ut augue sed justo eleifend ullamcorper.', 'Sed ut dolor in nibh laoreet posuere non quis nunc.', 'Vestibulum id odio vel turpis dictum commodo.', 'Nullam id metus imperdiet, bibendum urna condimentum, aliquet elit.', 'Suspendisse sit amet erat vitae quam vestibulum finibus.'];

  const write = () => {
    let flag = true;
    while (i > end && flag) {
      const index1 = Math.floor(Math.random() * dataRestaurantName.length);
      const index2 = Math.floor(Math.random() * dataUsername.length);
      const index3 = Math.floor(Math.random() * dataCity.length);
      const index4 = Math.floor(Math.random() * dataReview.length);
      const obj = {
        restaurantId: i,
        restaurantName: dataRestaurantName[index1],
        restaurantReviews: [
          {
            username: dataUsername[index2],
            city: dataCity[index3],
            dinedDate: getRandomTime(),
            rating: getRandomInteger(0, 6),
            review: dataReview[index4],
          }],
      };
      i -= 1;
      if (i === end) {
        stream.write(`${JSON.stringify(obj)}\n`, encoding, callback);
      } else {
        flag = stream.write(`${JSON.stringify(obj)}\n`, encoding);
      }
    }
    if (i > end) {
      stream.once('drain', write);
    }
  };
  write();
};

randomDataGene(0, 100, writeStream, 'utf8', () => console.log('COMPLETED'));
