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

// 8 - убираем повторяющиеся элементы из массива
const getIntersected = (array) => [...new Set(array)];

// 7 - обьединяем два массива (предпочтений пользователя и по гендеру) и обрезаем до первых пяти элементов
const getUserResultingPreferences = (preferences, genderPreferences) =>
  getIntersected(preferences.concat(genderPreferences)).slice(0, 5);

const getTopProducts = async () => {
  // 1 - получаем всех пользователей
  let users = await getUsers();

  // 2 - создаем массив асинхронных запросов для получения предпочтений каждого пользователя
  let usersPreferencesPromises = users.map(
    async (user) => await getPreferences(user.id)
  );

  // 3 - получаем результирующий массив всех запросов выше
  let usersPreferencesResults = await Promise.all(usersPreferencesPromises);

  // 4 - создаем массив асинхронных запросов для получения предпочтений каждого пользователя по гендеру
  let usersGenderPreferencesPromises = users.map(
    async (user) => await getGenderPreferences(user.gender)
  );

  // 5 - получаем результирующий массив всех запросов выше
  let usersGenderPreferencesResults = await Promise.all(
    usersGenderPreferencesPromises
  );

  // 6 - результирующий массив пользователей, у которых resultPreferences - массив полученный из пункта 7
  let updatedUsers = users.map((user, index) => ({
    ...user,
    resultPreferences: getUserResultingPreferences(
      usersPreferencesResults[index],
      usersGenderPreferencesResults[index]
    )
  }));

  // 9 - фильтруем массив пользователей, у которых не набралось 5 элементов
  let filteredUsers = updatedUsers.filter(
    (user) => user.resultPreferences.length >= 5
  );

  // 10 - собираем все предпочтения всех пользователей в один массив
  let allProductsArray = filteredUsers.reduce(
    (resultArray, { resultPreferences }) =>
      resultArray.concat(resultPreferences),
    []
  );

  // 11 - создаем обьект counter для подсчета повторов каждого элемента
  const productsCounter = allProductsArray.reduce((counterObj, element) => {
    counterObj[element] = (counterObj[element] || 0) + 1;
    return counterObj;
  }, {});

  // 12 - сортируем из обьекта counter в новый массив (от популярных к редким)
  let sortedProducts = Object.keys(productsCounter).sort((left, right) => {
    let a = productsCounter[left];
    let b = productsCounter[right];
    return a < b ? 1 : a > b ? -1 : 0;
  });

  // 13 - возвращаем первые 10 элементов этого массива (РЕЗУЛЬТАТ)
  return {
    // updatedUsers,
    // filteredUsers,
    // allProductsArray,
    // productsCounter,
    // sortedProducts,
    _result: sortedProducts.slice(0, 10)
  };
};

const displayResult = async () => {
  let result = await getTopProducts();
  let [root] = document.getElementsByTagName("div");
  root.innerHTML = JSON.stringify(result);
  console.log("Result ->", result);
};

displayResult();
