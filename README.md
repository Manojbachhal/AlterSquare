# YakShop

## Description

YakShop is a system designed to manage yak stocks, specifically focusing on wool and milk production. The application tracks the age of yaks, their shaving eligibility, and daily milk output based on the yaks' age. It ensures that the data reflects the yaks' lifecycle, adhering to specific business rules, such as shaving intervals and milk production calculations.

## Features

- **Yak Management:** Track individual yak details, including age, name, and last shaved age.
- **Milk Production Calculation:** Daily calculation of milk production based on the yak's age.
- **Shaving Eligibility:** Determine when a yak can be shaved based on its age and previous shaving history.

## Getting Started

### Prerequisites

- Node.js (version 18.x or higher)
- npm (Node package manager)

## Setup

Follow the steps given below:

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/yakshop.git
```

2. **Move to the project folder**

```bash
cd AlterSquare-assignment
```

3. **Install dependencies:**

```bash
npm install
```

4. **Start the server **

```bash
npm start
```

## API Endpoints

```http
  GET yak-shop/stock/T
```

| Base URL                 | endpoints          | request type | parameters     | description                                       |
| :----------------------- | :----------------- | :----------- | :------------- | :------------------------------------------------ |
| `http://localhost:3000/` | `yak-shop/stock/T` | `Get`        | number of days | Returns the milk and skin stock after T days.     |
| `http://localhost:3000/` | `yak-shop/stock/T` | `Get`        | number of days | Returns the details of the yak herd after T days. |

#### Get item

- Get production stock Sample Request:

```bash
http://localhost:3000/yak-shop/stock/13
```

- Response:
- sample input

```bash
{
  "herd": [
    {
      "name": "Betty-1",
      "age": 4,
      "sex": "f"
    },
    {
      "name": "Betty-2",
      "age": 8,
      "sex": "f"
    },
    {
      "name": "Betty-3",
      "age": 9.5,
      "sex": "f"
    }
  ]
}

```

```bash
{
    "milk": 1104.48,
    "skins": 3
}
```

- Get Yak Herd Sample Request:

```bash
http://localhost:3000/yak-shop/herd/13
```

- Response:

```bash
{
    "herd": [
        {
            "name": "Betty-1",
            "age": 4.13,
            "age-last-shaved": 4.0
        },
        {
            "name": "Betty-2",
            "age": 8.13,
            "age-last-shaved": 8.0
        },
        {
            "name": "Betty-3",
            "age": 9.63,
            "age-last-shaved": 9.5
        }
    ]
}

```
