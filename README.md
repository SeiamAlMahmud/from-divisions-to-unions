# from-divisions-to-unions

A lightweight npm package to get all **Divisions, Districts, Upazilas, and Unions** of Bangladesh — with support for both **Bangla** and **English** data.

## Installation

```bash
npm install from-divisions-to-unions
```

---

## Usage

### ES Module (React, Next.js, etc.)

```js
import {
  getAllDivision,
  getAllDistrict,
  getAllUpazila,
  getAllUnion,
  getDistricts,
  getUpazilas,
  getUnions,
} from 'from-divisions-to-unions';
```

### CommonJS (Express, Node.js, etc.)

```js
const {
  getAllDivision,
  getAllDistrict,
  getAllUpazila,
  getAllUnion,
  getDistricts,
  getUpazilas,
  getUnions,
} = require('from-divisions-to-unions');
```

---

## Functions

### Get All Data

| Function | Description |
|---|---|
| `getAllDivision()` | Returns all divisions (Bangla by default) |
| `getAllDistrict()` | Returns all districts |
| `getAllUpazila()` | Returns all upazilas |
| `getAllUnion()` | Returns all unions |

Pass `"en"` as argument to get English data:

```js
getAllDivision()       // Bangla
getAllDivision("en")   // English

getAllDistrict("en")
getAllUpazila("en")
getAllUnion("en")
```

---

### Get Filtered Data (by parent)

| Function | Description |
|---|---|
| `getDistricts(division_value)` | Get districts under a specific division |
| `getUpazilas(district_value)` | Get upazilas under a specific district |
| `getUnions(upazila_value)` | Get unions under a specific upazila |

```js
const districts = getDistricts("dhaka");        // Bangla
const districts = getDistricts("dhaka", "en");  // English

const upazilas = getUpazilas("gazipur");
const unions   = getUnions("kaliakair");
```

---

## Example Response

```js
getAllDivision()
// [
//   { value: "dhaka", title: "ঢাকা" },
//   { value: "chittagong", title: "চট্টগ্রাম" },
//   ...
// ]

getAllDivision("en")
// [
//   { value: "dhaka", title: "Dhaka" },
//   { value: "chittagong", title: "Chittagong" },
//   ...
// ]
```

---

## Author

**Seiam Al Mahmud**

- GitHub: [SeiamAlMahmud](https://github.com/SeiamAlMahmud)
- npm: [from-divisions-to-unions](https://www.npmjs.com/package/from-divisions-to-unions)
