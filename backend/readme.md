# JSON Server Database Documentation

This document provides an overview of the JSON data structure used in the `db.json` file for the JSON Server in this project.

## `db.json` Structure

### Templates

The `templates` array in the `db.json` file stores an array of template objects.

Structure of templates: 

```json
"templates": [
    {
      "id": 1,
      "name": "Ecommerce Landing Page",
      "design": {},
      "img: "img.png"
    }
]

```

### userSelectedData

The `userSelectedData` object contains information about the user's selections in various categories: `type, design, content, behaviour, and success`. Here is the structure of the userSelectedData object:

```json
"userSelectedData": {
    "type": null,
    "design": null,
    "content": null,
    "behaviour": null,
    "success": {
        "id": "2",
        "value": 6
    }
}
```

## Routes

Following operations can be performed: 

```bash

GET \templates (returns all templates)
GET \templates\:id (return the template with the specific id)
POST \template (post the data to the template array)
POST \userSelectedData (post the data to userSelectedData)

```
