module.exports = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    PREMISSTION_DEINED:403,

    USER_DATA:{
        admin:"admin",
        user1:"password"
    },
    RAW_DATA: {
        Item: [{
            '_id': '587f0f2586653d19297d40c2',
            name: '钢笔',
            price: 12
        }, {
            '_id': '587f0f2586653d19297d40c3',
            name: '电脑',
            price: 6000
        }, {
            '_id': '587f0f2586653d19297d40c4',
            name: '手机',
            price: 3000
        }],
        Category:
            [{
                '_id': '587f0f2586653d19297d40c8',
                type: '文具',
                items: [{
                    "_id": "587f0f2586653d19297d40c2"
                }]
            }, {
                '_id': '587f0f2586653d19297d40c9',
                type: '电子产品',
                items: [{
                    "_id": "587f0f2586653d19297d40c4"
                }, {
                    "_id": "587f0f2586653d19297d40c3"
                }]
            }],
        Cart:
            [{
                '_id': '587f0f2586653d19297d40c6',
                user: 'user1',
                items: [
                    {
                        item: '587f0f2586653d19297d40c2',
                        count: 1
                    }, {
                        item: '587f0f2586653d19297d40c3',
                        count: 1
                    },
                    {
                        item: '587f0f2586653d19297d40c4',
                        count: 1
                    }
                ]
            },{
                '_id': '587f0f2586653d19297d40c7',
                user: 'user2',
                items: [
                    {
                        item: '587f0f2586653d19297d40c2',
                        count: 11
                    }, {
                        item: '587f0f2586653d19297d40c3',
                        count: 99
                    }

                ]
            }]
    }

};