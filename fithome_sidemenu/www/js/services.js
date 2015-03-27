angular.module('starter.services', [])

    .factory('Projects', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var projects = [
            {
                id: 1,
                name: "Hoàng Anh Gia Lai",
                picture: "gialai.jpg",
                images: ["gialai1.jpg", "gialai2.jpg", "gialai3.jpg"],
                description: "Căn hộ Hoàng Anh Gia Lai được thiết kế và thi công với ngân sách thấp nhất. Để cho thuê trong vòng 02 năm, nên Fit Home ứng dụng theo xu hướng khá đơn giản bởi sự hạn chế do diện tích mặt bằng thường không được rộng. Không gian này cũng thường liên thông với bếp ăn. Do đó, khi trang trí và sắp xếp nội thất ngoài việc nhấn mạnh công năng sử dụng còn nên chú ý đến yếu tố thẩm mỹ để tạo sự thoải mái cho người sử dụng",
                price: "175tr",
                works: ["Vẽ phối cảnh 3D và tư vấn theo mẫu có sẵn",
                    "Cải tạo mặt bằng, lót gạch, quét sơn nước",
                    "Thi công sản xuất Phòng trẻ em, Bếp, Phòng ăn"
                ]

            }

        ];

        return {
            all: function () {
                return projects;
            },
            get: function (projectId) {
                for (var i = 0; i < projects.length; i++) {
                    if (projects[i].id === parseInt(projectId)) {
                        return projects[i];
                    }
                }
                return null;
            }
        };
    });
