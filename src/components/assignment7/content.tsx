"use client";
import { AppContext } from "@/context/assignment7/AppContext";
import { useContext } from "react";

export default function Content() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("MyComponent must be used within an AppProvider");
  }

  const { userData, isOpen, themeStyle } = context;
  return (
    <div
      className="m-1 border border-1 p-2"
      style={{
        ...themeStyle,
        gridColumn: isOpen ? "2 / 4" : "1 /4",
      }}
    >
      <p>Nhiệt liệt chào mừng: {userData.lastName}</p>
      <p>
        Đón quý khách tại văn phòng Saigontourist 01 Nguyễn Chí Thanh lúc 5h00
        sáng hoặc 45 Lê Thánh Tôn lúc 5h30 sáng. Đoàn khởi hành đi Long An theo
        đường N2, dừng chân ăn sáng tại Làng Cổ Phước Lộc Thọ - điểm tham quan
        độc đáo với những căn nhà cổ mang bản sắc ba miền đất nước Bắc - Trung -
        Nam, sở hữu cảnh quan sinh thái hữu tình làm mê mẩn những tâm hồn hoài
        cổ. Đoàn tiếp tục đến Làng Nổi Tân Lập – khám phá nét đẹp hoang sơ một
        khu rừng tràm nguyên sinh rộng lớn dọc theo hai bên cung đường bê tông
        xuyên rừng dài và đẹp nhất Việt Nam, con đường dẫn bước chân du khách
        đến cảnh quan cầu chữ X, hồ Bán Nguyệt, tháp quan sát cao 18m nơi bạn có
        thể phóng tầm mắt nhìn toàn cảnh vùng Đồng Tháp Mười, khám phá khu thuần
        dưỡng chim, xuôi mái chèo trên xuồng ba lá len lõi trong những con rạch
        nhỏ xuyên rừng tràm rất yên bình và tĩnh lặng, tận hưởng khung cảnh chim
        trời cá nước mênh mông như trong câu hát ‘’…theo cơn gió, theo con nước
        tôi đi về phương Nam xa xôi…’’. Đoàn dùng cơm trưa tại nhà hàng với
        những món ăn dân dã, đặc sắc…Tiếp tục hành trình đến Đồng Tháp, sau khi
        nhận phòng, quý khách tự do khám phá Thành phố Cao Lãnh và thưởng thức
        đặc sản địa phương. Nghỉ đêm tại Cao Lãnh. Lựa chọn: (tự túc chi phí di
        chuyển và vé tham quan) - Tham quan khu Đền thờ ông bà Đỗ Công Tường,
        dân gian hay gọi là ông bà chủ chợ Cao Lãnh- điểm tham quan văn hóa tâm
        linh nổi tiếng thuộc di tích lịch sử văn hóa quốc gia. - Tham quan chợ
        quê Tân Thuận Đông (chỉ mở từ 14h-20h, thứ bảy hàng tuần), phiên chợ tái
        hiện khung cảnh chợ xưa với những sản phẩm cây nhà lá vườn như các loại
        trái cây, thức uống dân dã, bánh nhân gian, thưởng thức đờn ca tài tử…
      </p>
      <p>
        Đón quý khách tại văn phòng Saigontourist 01 Nguyễn Chí Thanh lúc 5h00
        sáng hoặc 45 Lê Thánh Tôn lúc 5h30 sáng. Đoàn khởi hành đi Long An theo
        đường N2, dừng chân ăn sáng tại Làng Cổ Phước Lộc Thọ - điểm tham quan
        độc đáo với những căn nhà cổ mang bản sắc ba miền đất nước Bắc - Trung -
        Nam, sở hữu cảnh quan sinh thái hữu tình làm mê mẩn những tâm hồn hoài
        cổ. Đoàn tiếp tục đến Làng Nổi Tân Lập – khám phá nét đẹp hoang sơ một
        khu rừng tràm nguyên sinh rộng lớn dọc theo hai bên cung đường bê tông
        xuyên rừng dài và đẹp nhất Việt Nam, con đường dẫn bước chân du khách
        đến cảnh quan cầu chữ X, hồ Bán Nguyệt, tháp quan sát cao 18m nơi bạn có
        thể phóng tầm mắt nhìn toàn cảnh vùng Đồng Tháp Mười, khám phá khu thuần
        dưỡng chim, xuôi mái chèo trên xuồng ba lá len lõi trong những con rạch
        nhỏ xuyên rừng tràm rất yên bình và tĩnh lặng, tận hưởng khung cảnh chim
        trời cá nước mênh mông như trong câu hát ‘’…theo cơn gió, theo con nước
        tôi đi về phương Nam xa xôi…’’. Đoàn dùng cơm trưa tại nhà hàng với
        những món ăn dân dã, đặc sắc…Tiếp tục hành trình đến Đồng Tháp, sau khi
        nhận phòng, quý khách tự do khám phá Thành phố Cao Lãnh và thưởng thức
        đặc sản địa phương. Nghỉ đêm tại Cao Lãnh. Lựa chọn: (tự túc chi phí di
        chuyển và vé tham quan) - Tham quan khu Đền thờ ông bà Đỗ Công Tường,
        dân gian hay gọi là ông bà chủ chợ Cao Lãnh- điểm tham quan văn hóa tâm
        linh nổi tiếng thuộc di tích lịch sử văn hóa quốc gia. - Tham quan chợ
        quê Tân Thuận Đông (chỉ mở từ 14h-20h, thứ bảy hàng tuần), phiên chợ tái
        hiện khung cảnh chợ xưa với những sản phẩm cây nhà lá vườn như các loại
        trái cây, thức uống dân dã, bánh nhân gian, thưởng thức đờn ca tài tử…
      </p>
    </div>
  );
}
