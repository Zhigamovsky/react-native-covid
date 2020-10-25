/*

1) топ формируется исходя из наиболее частого вхождения товаров в 
списки предпочтения пользователей;

2) учитываются строго 5 товаров из списка предпочтения пользователя;

3) в случае если у пользователя в предпочтениях менее 5 товаров его 
список дополняется товароми из списка топ товаров по гендерной пренадлежности. 
В итоговом списке предпочтений пользователя не должно быть повторений;

4) в случает нехватки товаров в предпочтениях пользователя 
после 3-го пункта данный пользователь не участвует в формировании выборки;

*/

const timeOut = () => new Promise((resolve) => setTimeout(resolve, 500));

const getUsers = async () => {
  const users = [
    { id: 1, gender: 0 },
    { id: 2, gender: 1 },
    { id: 3, gender: 0 },
    { id: 4, gender: 1 },
    { id: 5, gender: 0 },
    { id: 6, gender: 0 },
    { id: 7, gender: 1 },
    { id: 8, gender: 0 }
  ];
  await timeOut();
  return users;
};

const getPreferences = async (userId) => {
  const userPreferences = [
    { id: 1, preferences: ["a9", "b1"] },
    { id: 2, preferences: ["a2", "b8", "a4"] },
    { id: 3, preferences: ["a9", "b1", "b2", "b5", "a7"] },
    { id: 4, preferences: ["b1"] },
    { id: 5, preferences: [] },
    { id: 6, preferences: ["a6", "b5", "b7"] },
    { id: 7, preferences: ["a7", "b7"] },
    { id: 8, preferences: ["a9", "b1", "b2", "b3"] }
  ];
  await timeOut();
  return userPreferences.find((el) => el.id === userId).preferences;
};

const getGenderPreferences = async (gender) => {
  const genderPreferences = [
    { gender: 1, preferences: ["a9", "b1"] },
    { gender: 0, preferences: ["a6", "b5", "b7", "a1", "a4"] }
  ];
  await timeOut();
  return genderPreferences.find((el) => el.gender === gender).preferences;
};

const getIntersected = (array) => [...new Set(array)];
const getUserResultingPreferences = (preferences, genderPreferences) => getIntersected(preferences.concat(genderPreferences)).slice(0, 5);
const getTopProducts = async () => {
  let users = await getUsers()
  let usersPreferencesPromises = users.map(async user => await getPreferences(user.id))
  let usersPreferencesResults = await Promise.all(usersPreferencesPromises)
  let usersGenderPreferencesPromises = users.map(async user => await getGenderPreferences(user.gender))
  let usersGenderPreferencesResults = await Promise.all(usersGenderPreferencesPromises)
  let updatedUsers = users.map((user, index) => ({
    ...user,
    resultPreferences: getUserResultingPreferences(
      usersPreferencesResults[index],
      usersGenderPreferencesResults[index]
    )
  }))
  let filteredUsers = updatedUsers.filter(user => user.resultPreferences.length >= 5)
  let allProductsArray = filteredUsers.reduce((resultArray, { resultPreferences }) => resultArray.concat(resultPreferences), []);
  const productsCounter = allProductsArray.reduce((counterObj, element) => {
    counterObj[element] = (counterObj[element] || 0) + 1;
    return counterObj;
  }, {})
  let sortedProducts = Object.keys(productsCounter).sort((left, right) => {
    let a = productsCounter[left];
    let b = productsCounter[right];
    return a < b ? 1 : a > b ? -1 : 0;
  })
  return { _result: sortedProducts.slice(0, 10) }
};

const displayResult = async () => {
  let result = await getTopProducts();
  let [root] = document.getElementsByTagName("div");
  root.innerHTML = JSON.stringify(result);
  console.log("Result ->", result);
};

displayResult();