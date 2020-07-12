// Write your solution in this file!
const driver={};

function updateDriverWithKeyAndValue(driver, address,value){
  const newDriver= {... driver};
  newDriver.address=value;
  return driver, newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, address,value){
  driver.address=value;
  return driver;
}

function deleteFromDriverByKey(driver,name)
{
  const newdriver = Object.assign({},driver);
  delete newdriver.name;
  return newdriver;
}
function destructivelyDeleteFromDriverByKey(driver,key)
{
  delete driver.key;
}