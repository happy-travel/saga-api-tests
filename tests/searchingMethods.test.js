import { gatUserData } from '../libraries/support/vaultClient';
import { getUserToken } from '../libraries/support/getToken';
import { getAccommodationsAvailable } from '../accommodations/getAccommodationsAvailable';

describe('searching methods', () => {
  test('POST ​/{culture}​/api​/{v}​/availabilities​/accommodations Dubai per an adult', async () => {
    const user = await gatUserData("master");
    const token = await getUserToken(user.login, user.password);
    const roomDetails = [
      {
        "adultsNumber": 1,
        "childrenNumber": 0
      }
    ];
    const response = await getAccommodationsAvailable(token, "Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);
  })

  test('POST ​/{culture}​/api​/{v}​/availabilities​/accommodations Dubai per an adult and a child (1 yr.)', async () => {
    const user = await gatUserData("master");
    const token = await getUserToken(user.login, user.password);
    const roomDetails = [
      {
        "adultsNumber": 1,
        "childrenNumber": 1,
        "childrenAges": [
          "1"
        ]
      }
    ];
    const response = await getAccommodationsAvailable(token, "Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);
  })

  test('POST ​/{culture}​/api​/{v}​/availabilities​/accommodations Dubai per an adult and a child (4 yrs.)', async () => {
    const user = await gatUserData("master");
    const token = await getUserToken(user.login, user.password);
    const roomDetails = [
      {
        "adultsNumber": 1,
        "childrenNumber": 1,
        "childrenAges": [
          "4"
        ]
      }
    ];
    const response = await getAccommodationsAvailable(token, "Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);
  })

  test('POST ​/{culture}​/api​/{v}​/availabilities​/accommodations Dubai per 2 adults', async () => {
    const user = await gatUserData("master");
    const token = await getUserToken(user.login, user.password);
    const roomDetails = [
      {
        "adultsNumber": 2,
        "childrenNumber": 0
      }
    ];
    const response = await getAccommodationsAvailable(token, "Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);
  })

  test('POST ​/{culture}​/api​/{v}​/availabilities​/accommodations Dubai per 2 adults and a child (3 yrs.)', async () => {
    const user = await gatUserData("master");
    const token = await getUserToken(user.login, user.password);
    const roomDetails = [
      {
        "adultsNumber": 2,
        "childrenNumber": 1,
        "childrenAges": [
          "3"
        ]
      }
    ];
    const response = await getAccommodationsAvailable(token, "Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);
  })

  test('POST ​/{culture}​/api​/{v}​/availabilities​/accommodations Dubai per 2 adults and 2 children (1 yr. and 8 yrs.)', async () => {
    const user = await gatUserData("master");
    const token = await getUserToken(user.login, user.password);
    const roomDetails = [
      {
        "adultsNumber": 2,
        "childrenNumber": 2,
        "childrenAges": [
          "1",
          "8"
        ]
      }
    ];
    const response = await getAccommodationsAvailable(token, "Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);
  })

  test('POST ​/{culture}​/api​/{v}​/availabilities​/accommodations Dubai per 2 adults and 2 children (5 yr. and 6 yrs.)', async () => {
    const user = await gatUserData("master");
    const token = await getUserToken(user.login, user.password);
    const roomDetails = [
      {
        "adultsNumber": 2,
        "childrenNumber": 2,
        "childrenAges": [
          "5",
          "6"
        ]
      }
    ];
    const response = await getAccommodationsAvailable(token, "Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);
  })

  test('POST ​/{culture}​/api​/{v}​/availabilities​/accommodations Dubai per 3 adults', async () => {
    const user = await gatUserData("master");
    const token = await getUserToken(user.login, user.password);
    const roomDetails = [
      {
        "adultsNumber": 3,
        "childrenNumber": 0
      }
    ];
    const response = await getAccommodationsAvailable(token, "Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);
  })

  test('POST ​/{culture}​/api​/{v}​/availabilities​/accommodations Dubai per 3 adults and a child (1 yr.)', async () => {
    const user = await gatUserData("master");
    const token = await getUserToken(user.login, user.password);
    const roomDetails = [
      {
        "adultsNumber": 3,
        "childrenNumber": 1,
        "childrenAges": [
          "1"
        ]
      }
    ];
    const response = await getAccommodationsAvailable(token, "Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);
  })

  test('POST ​/{culture}​/api​/{v}​/availabilities​/accommodations Dubai per 5 adults', async () => {
    const user = await gatUserData("master");
    const token = await getUserToken(user.login, user.password);
    const roomDetails = [
      {
        "adultsNumber": 5,
        "childrenNumber": 0
      }
    ];
    const response = await getAccommodationsAvailable(token, "Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);
  })

});