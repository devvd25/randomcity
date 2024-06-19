const cities = {
    'hanoi': '01. Ha Noi',
    'hagiang': '02. Ha Giang',
    'caobang': '03. Cao Bang',
    'backan': '04. Bac Kan',
    'tuyenquang': '05. Tuyen Quang',
    'laocai': '06. Lao Cai',
    'dienbien': '07. Dien Bien',
    'laichau': '08. Lai Chau',
    'sonla': '09. Son La',
    'yenbai': '10. Yen Bai',
    'hoabinh': '11. Hoa Binh',
    'thainguyen': '12. Thai Nguyen',
    'langson': '13. Lang Son',
    'quangninh': '14. Quang Ninh',
    'bacgiang': '15. Bac Giang',
    'phutho': '16. Phu Tho',
    'vinhphuc': '17. Vinh Phuc',
    'bacninh': '18. Bac Ninh',
    'haiduong': '19. Hai Duong',
    'haiphong': '20. Hai Phong',
    'hungyen': '21. Hung Yen',
    'thaibinh': '22. Thai Binh',
    'hanam': '23. Ha Nam',
    'namdinh': '24. Nam Dinh',
    'ninhbinh': '25. Ninh Binh',
    'thanhhoa': '26. Thanh Hoa',
    'nghean': '27. Nghe An',
    'hatinh': '28. Ha Tinh',
    'quangbinh': '29. Quang Binh',
    'quangtri': '30. Quang Tri',
    'thuathienhue': '31. Thua Thien Hue',
    'danang': '32. Da Nang',
    'quangnam': '33. Quang Nam',
    'quangngai': '34. Quang Ngai',
    'binhdinh': '35. Binh Dinh',
    'khanhhoa': '37. Khanh Hoa',
    'ninhthuan': '38. Ninh Thuan',
    'binhthuan': '39. Binh Thuan',
    'kontum': '40. Kon Tum',
    'gialai': '41. Gia Lai',
    'daklak': '42. Dak Lak',
    'binhphuoc': '45. Binh Phuoc',
    'tayninh': '46. Tay Ninh',
    'binhduong': '47. Binh Duong',
    'dongnai': '48. Dong Nai',
    'bariavungtau': '49. Ba Ria Vung Tau',
    'hochiminh': '50. Ho Chi Minh'
};

function searchCity() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    if (cities[searchInput]) {
        resultDiv.innerHTML = cities[searchInput];
    } else {
        resultDiv.innerHTML = 'Không có kết quả';
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        searchCity();
    }
}
