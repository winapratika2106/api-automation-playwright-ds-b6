const { test, expect } = require('@playwright/test');
const Ajv = require('ajv');
const ajv = new Ajv();

const userSchema = require('../schema/getUser.schema.json');

test('GET /api/users/2 - Fetch single user', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2');
  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  // Validate response body against the schema
  const validate = ajv.compile(userSchema);
  const valid = validate(responseBody);

  expect(valid).toBe(true);
});
