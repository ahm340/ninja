
enum role {user, superadmin};

let account = role.user

if (account === role.superadmin) {
    console.log('user');
}else {
    console.log('superadmin');
}