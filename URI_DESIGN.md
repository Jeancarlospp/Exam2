# URI Design - Table API

## Endpoint Documentation

### CREATE Table

**Method:** `POST`

**Endpoint:** `https://exam2-jay9.onrender.com/tables`

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "serialNumber": "TBL001",
  "brand": "IKEA",
  "model": "LACK",
  "twoFields": "White/Modern",
  "price": 50
}
```

**Response (201 Created):**
```json
{
  "_id": "675f1234567890abcdef1234",
  "serialNumber": "TBL001",
  "brand": "IKEA",
  "model": "LACK",
  "twoFields": "White/Modern",
  "price": 50,
  "createdAt": "2025-12-15T10:30:00.000Z",
  "updatedAt": "2025-12-15T10:30:00.000Z",
  "__v": 0
}
```

**Error Response (400 Bad Request):**
```json
{
  "error": "Table validation failed: serialNumber: Path `serialNumber` is required."
}
```

---

## Testing in Postman

### Step by Step:

1. **Open Postman**

2. **Create New Request:**
   - Click "New" → "HTTP Request"

3. **Configure Request:**
   - **Method:** Select `POST` from dropdown
   - **URL:** `https://exam2-jay9.onrender.com/tables`

4. **Set Headers:**
   - Click "Headers" tab
   - Add: `Content-Type` = `application/json`

5. **Set Body:**
   - Click "Body" tab
   - Select "raw"
   - Select "JSON" from dropdown
   - Paste:
   ```json
   {
     "serialNumber": "TBL001",
     "brand": "IKEA",
     "model": "LACK",
     "twoFields": "White/Modern",
     "price": 50
   }
   ```

6. **Send Request:**
   - Click "Send" button
   - Check response below (should be 201 with created table data)

---

## URI Design Pattern

```
POST /tables
```

- **Resource:** `tables` (plural noun, lowercase)
- **No "api" prefix** (as requested)
- **Short and simple**
- **RESTful convention**
