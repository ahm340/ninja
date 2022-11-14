"use strict";
var role;
(function (role) {
    role[role["user"] = 0] = "user";
    role[role["superadmin"] = 1] = "superadmin";
})(role || (role = {}));
;
let account = role.user;
if (account != role.user) {
    console.log('user');
}
else {
    console.log('superadmin');
}
