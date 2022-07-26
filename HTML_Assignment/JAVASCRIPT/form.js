function myFunction() {
    const enrollmentForm = document.querySelector("form");
    const tBody = document.getElementById("enrolledStudentTableBody");


    function onEnrollStudent(e) {
        e.preventDefault();
        x = skillsCheck();
        if (x === false) {
            return;
        }
        enrolledStudentTableHead();
        const userName = document.getElementById("userName").value;
        const image = document.getElementById("userImageLink").value;
        const getGender = document.getElementsByName("gender");
        var gender;
        for (var i = 0; i < getGender.length; i++) {
            if (getGender[i].checked) {
                gender = getGender[i].value;
                break;
            }
        }
        const email = document.getElementById("userEmail").value;

        const website = document.getElementById("userWebsite").value;
        var result;
        var regEx;
        if (regEx = website.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
            result = regEx[1];
            if (regEx = result.match(/^[^\.]+\.(.+\..+)$/)) {
                result = regEx[1];
            }
        }

        var skills = [];
        var skill = document.getElementsByName("skill");
        for (var i = 0; i < skill.length; i++) {
            if (skill[i].checked) {
                skills.push(skill[i].value);
            }
        }
        tBody.innerHTML = `
        
        <tr class="recentAdded">
            <td id="studentDescription">
                <b>${userName}</b>
                <br>
                ${gender}
                <br>
                ${email}
                <br>
                <a href="${website}" target="_blank">www.${result}</a>
                <br>
                ${skills}
                <br>
            </td>
            <td  ><img src = "${image}" alt="image">
            </td>

        </tr>

    ` + tBody.innerHTML;

    }
    enrollmentForm.addEventListener("submit", onEnrollStudent);

    function enrolledStudentTableHead() {
        const tHead = document.getElementById("enrolledStudentTableHead");
        tHead.innerHTML = `
            <tr>
                <th >Description</th>
                <th >Image</th>
            </tr>
        `;
    }
    function skillsCheck() {
        const skillCheck = document.getElementsByName("skill");
        var check = 0;
        for (var i = 0; i < skillCheck.length; i++) {
            if (skillCheck[i].checked) {
                check = 1;
                break;
            }

        }
        if (check === 0) {
            alert("Please select atleast one Skill");
            return false;
        }
        return true;
    }
}
myFunction();