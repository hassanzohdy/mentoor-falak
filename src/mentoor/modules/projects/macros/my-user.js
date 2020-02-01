Macros.create('mapUser', function (user) {
    return {
        text: `[@${user.username}] ${user.name}`,
        value: user.id,
    };
});