export const schema = {
    "models": {
        "Garment": {
            "name": "Garment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "GarmentType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "colour": {
                    "name": "colour",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Garments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "GarmentType": {
            "name": "GarmentType",
            "values": [
                "DRESS",
                "PANTS",
                "SHORTS",
                "SKIRTS",
                "TSHIRT",
                "SHIRT"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.3.5",
    "version": "be8a50a6faf2a237fb0bc98062c6a6ec"
};