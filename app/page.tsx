import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WeddingInvitation() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 flex flex-col items-center justify-center p-4">
      <Card className="max-w-3xl w-full rounded-2xl shadow-lg">
        <CardContent className="p-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-pink-600 mb-4"
          >
            Thiệp Mời Dự Lễ Cưới
          </motion.h1>

          <p className="text-lg mb-2">Trân trọng kính mời bạn đến dự lễ cưới của</p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-semibold text-pink-500 mb-2"
          >
            Nguyễn Sỹ Đạt & Nguyễn Thị Lan Anh
          </motion.h2>

          <p className="mb-4">
            Chú rể: Nguyễn Sỹ Đạt - Con ông Nguyễn Sỹ Đào & bà Bùi Thị Hằng<br />
            Cô dâu: Nguyễn Thị Lan Anh - Con ông Nguyễn Phú Minh & bà Trần Thị Ngần
          </p>

          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <h3 className="text-xl font-bold text-pink-600">📍 Nhà trai - Mời ăn cưới</h3>
            <p>
              Thời gian: 17h Thứ Bảy, ngày 5/7/2025 (Âm lịch: 11/6/2025)<br />
              Địa điểm: Thôn Ngô Quyền, xã Cộng Hoà, Hưng Hà, Thái Bình
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h3 className="text-xl font-bold text-pink-600">💍 Lễ thành hôn</h3>
            <p>
              Thời gian: 10h Chủ Nhật, ngày 6/7/2025 (Âm lịch: 12/6/2025)<br />
              Địa điểm: Thôn Ngô Quyền, xã Cộng Hoà, Hưng Hà, Thái Bình
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-6 py-2 rounded-full">
              Xem Bản Đầy Đủ
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
