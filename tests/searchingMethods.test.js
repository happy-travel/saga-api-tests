import { gatUserData, getPaths } from '../libraries/support/vaultClient';
import { getUserToken } from '../libraries/support/getToken';
import { getAvailabilitySearchIdentifier } from '../accommodations/getAvailabilitySearchIdentifier';

let token;
let edo;

beforeAll(async () => {
  let url = await getPaths();
  edo = url.edo;
  let user = await gatUserData("master");
  token = await getUserToken(user.login, user.password);
})

describe('searching methods', () => {
  test('POST /{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per an adult', async () => {
    let start = new Date().getTime();

    const roomDetails = [
      {
        "adultsNumber": 1,
        "childrenNumber": 0
      }
    ];
    const response = await getAvailabilitySearchIdentifier(edo, token, "Grand Hyatt Dubai", roomDetails, "saudi", "saudi");
    console.log(response);
    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);

    let end = new Date().getTime();
    console.log(`Test POST /{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per an adult: ${(end - start) / 1000}sec`);
  });

  test.skip('POST ​/{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per an adult and a child (1 yr.)', async () => {
    let start = new Date().getTime();

    const roomDetails = [
      {
        "adultsNumber": 1,
        "childrenNumber": 1,
        "childrenAges": [
          "1"
        ]
      }
    ];
    const response = await getAvailabilitySearchIdentifier(edo, token, "Grand Hyatt Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);

    let end = new Date().getTime();
    console.log(`Test POST ​/{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per an adult and a child (1 yr.): ${(end - start) / 1000}sec`);
  })

  test.skip('POST /{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per an adult and a child (4 yrs.)', async () => {
    let start = new Date().getTime();

    const roomDetails = [
      {
        "adultsNumber": 1,
        "childrenNumber": 1,
        "childrenAges": [
          "4"
        ]
      }
    ];
    const response = await getAvailabilitySearchIdentifier(edo, token, "Grand Hyatt Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);

    let end = new Date().getTime();
    console.log(`Test POST ​/{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per an adult and a child (4 yrs.): ${(end - start) / 1000}sec`);
  })

  test.skip('POST ​/{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 2 adults', async () => {
    let start = new Date().getTime();

    const roomDetails = [
      {
        "adultsNumber": 2,
        "childrenNumber": 0
      }
    ];
    const response = await getAvailabilitySearchIdentifier(edo, token, "Grand Hyatt Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);

    let end = new Date().getTime();
    console.log(`Test POST ​/{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 2 adults: ${(end - start) / 1000}sec`);
  })

  test.skip('POST ​/{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 2 adults and a child (3 yrs.)', async () => {
    let start = new Date().getTime();

    const roomDetails = [
      {
        "adultsNumber": 2,
        "childrenNumber": 1,
        "childrenAges": [
          "3"
        ]
      }
    ];
    const response = await getAvailabilitySearchIdentifier(edo, token, "Grand Hyatt Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);

    let end = new Date().getTime();
    console.log(`Test POST /{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 2 adults and a child (3 yrs.): ${(end - start) / 1000}sec`);
  })

  test.skip('POST ​/{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 2 adults and 2 children (1 yr. and 8 yrs.)', async () => {
    let start = new Date().getTime();

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
    const response = await getAvailabilitySearchIdentifier(edo, token, "Grand Hyatt Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);

    let end = new Date().getTime();
    console.log(`Test POST ​/{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 2 adults and 2 children (1 yr. and 8 yrs.): ${(end - start) / 1000}sec`);
  })

  test.skip('POST ​/{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 2 adults and 2 children (5 yr. and 6 yrs.)', async () => {
    let start = new Date().getTime();

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
    const response = await getAvailabilitySearchIdentifier(edo, token, "Grand Hyatt Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);

    let end = new Date().getTime();
    console.log(`Test POST /{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 2 adults and 2 children (5 yr. and 6 yrs.): ${(end - start) / 1000}sec`);
  })

  test.skip('POST ​/{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 3 adults', async () => {
    let start = new Date().getTime();

    const roomDetails = [
      {
        "adultsNumber": 3,
        "childrenNumber": 0
      }
    ];
    const response = await getAvailabilitySearchIdentifier(edo, token, "Grand Hyatt Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);

    let end = new Date().getTime();
    console.log(`Test POST /{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 3 adults: ${(end - start) / 1000}sec`);
  })

  test.skip('POST /{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 3 adults and a child (1 yr.)', async () => {
    let start = new Date().getTime();

    const roomDetails = [
      {
        "adultsNumber": 3,
        "childrenNumber": 1,
        "childrenAges": [
          "1"
        ]
      }
    ];
    const response = await getAvailabilitySearchIdentifier(edo, token, "Grand Hyatt Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);

    let end = new Date().getTime();
    console.log(`Test POST /{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 3 adults and a child (1 yr.): ${(end - start) / 1000}sec`);
  })

  test.skip('POST ​/{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 5 adults', async () => {
    let start = new Date().getTime();

    const roomDetails = [
      {
        "adultsNumber": 5,
        "childrenNumber": 0
      }
    ];
    const response = await getAvailabilitySearchIdentifier(edo, token, "Grand Hyatt Dubai", roomDetails, "saudi", "saudi");

    expect(response.status).toBe(200);
    expect(response.data.numberOfNights).toBe(7);

    let end = new Date().getTime();
    console.log(`Test POST /{culture}/api/{v}/availabilities/accommodations/searches Grand Hyatt Dubai per 5 adults: ${(end - start) / 1000}sec`);
  })

});