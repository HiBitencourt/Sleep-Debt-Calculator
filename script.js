const getSleepHours = (day) => {
    if (day === 'mondey'){
    return 8;
    }
    else if (day === 'tuesday'){
      return 10;
    }
    else if (day === 'wednesday'){
      return 8;
    }
    else if (day === 'thursday'){
      return 8;
    }
    else if (day === 'friday'){
      return 8;
    }
    else if (day === 'saturday'){
      return 7;
    }
    else if (day === 'sanday'){
      return 8;
    }
    else {
      return 'Erro!';
    }
  };
  
  const getActualSleepHours = () => 
    getSleepHours('mondey') + 
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sanday');
  
    console.log(getSleepHours('mondey'));
    console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours) {
      console.log('You have got the perfect aumont of sleep!');
   }
   else if (actualSleepHours > idealSleepHours) {
     console.log('You have got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep this week!');
   }
    else if (actualSleepHours < idealSleepHours){
      console.log('You should get some rest because you have slept ' + (actualSleepHours - idealSleepHours) + 'hours less than you should have this week!');
    }
    else {
     console.log('Error! Somethinf wrong, check your code.');
    }
  };
  
  calculateSleepDebt();
  