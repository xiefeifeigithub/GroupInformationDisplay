// component/navigation/navigation.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        info: [
            [
                {
                    "img": "/images/1.jpg",
                    "name": "音乐系"
                },
                {
                    "img": "/images/1.jpg",
                    "name": "音乐系"
                },
                {
                    "img": "/images/1.jpg",
                    "name": "音乐系"
                },
                {
                    "img": "/images/1.jpg",
                    "name": "音乐系"
                }
            ],
            [
                {
                    "img": "/images/1.jpg",
                    "name": "音乐系"
                },
                {
                    "img": "/images/1.jpg",
                    "name": "音乐系"
                },
                {
                    "img": "/images/1.jpg",
                    "name": "音乐系"
                },
                {
                    "img": "/images/1.jpg",
                    "name": "更多"
                }
            ]
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onJumpTap: function (e) {
            var name = e.currentTarget.dataset.name;
            console.log(name);
        }
    }
})
