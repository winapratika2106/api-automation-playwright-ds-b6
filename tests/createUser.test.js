const { test, expect } = require('@playwright/test');
const Ajv = require('ajv');
const ajv = new Ajv();

const createUserSchema = require('../schema/createUser.schema.json');

test('POST /api/users - Create user', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: "morpheus",
      job: "leader"
    }
  });
  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  // Validate response body against the schema
  const validate = ajv.compile(createUserSchema);
  const valid = validate(responseBody);

  expect(valid).toBe(true);
});
