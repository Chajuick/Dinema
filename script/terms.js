const form = document.getElementsByName("Terms"); // 데이터 전송 form
const checkAll = document.querySelector("#allAgree_box"); // 모두 동의 체크박스
const checkBoxes = document.querySelectorAll(".normalAgree_box"); // 모두 동의 제외 체크박스
const submitButton = document.getElementById("nextBTN"); // 확인 버튼

// 체크박스의 체크 여부 임시 저장 공간
const agreements = {
    termsOfService: false, // 첫번째 체크박스
    privacyPolicy: false, // 두번째 체크박스
    allowPromotions: false, // 세번째 체크박스()
};

// '모두 동의' 체크박스가 체크가 되면 모든 체크박스의  체크를 하고, '모두 동의'
// 체크박스가 해제되면 모든 체크 박스의 체크상태를 해제
checkAll.addEventListener('click', (e) => {
    // checkbox의 체크 상태를 확인하기 위함, true or false 값 반환
    const { checked } = e.target; // const checked = e.target.checked 와 같다.
    if (checked) {
        checkBoxes.forEach((item) => {
            item.checked = true;
            agreements[item.name] = true;
            item.parentNode.classList.add('active');
        });
    } else {
        checkBoxes.forEach((item) => {
            item.checked = false;
            agreements[item.name] = false;
            item.parentNode.classList.remove('active');
        });
    }
    toggleSubmitButoon();
});

function toggleSubmitButoon() {
    const {termsOfService, privacyPolicy} = agreements;
    if (termsOfService && privacyPolicy) {
        submitButton.disabled = false; // 버튼 활성화
        submitButton.classList.add("active");
    } else {
        submitButton.disabled = true; // 버튼 비활성화
        submitButton.classList.remove("active");
    };
};

checkBoxes.forEach((item) => item.addEventListener('input', toggleCheckbox));

function toggleCheckbox(e) {
    const { checked , name } = e.target;
    agreements[name] = checked;
    this.parentNode.classList.toggle('active');
    checkAllStatus();
    toggleSubmitButoon();
}

function checkAllStatus() {
    const { termsOfService, privacyPolicy, allowPromotions } = agreements;
    if (termsOfService && privacyPolicy && allowPromotions) {
      checkAll.checked = true;
    } else {
      checkAll.checked = false;
    }
}