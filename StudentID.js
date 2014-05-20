module.exports = function(id) {
    if((id+'').length != 7)
        throw('Invaild ID - Not 7 digits long');

    this.id = id;

    this.year = getYear(id);
    this.school = getSchool(id);
    this.uid = getUID(id);
};

module.exports.prototype.toString = function() {
    return '[object StudentID]';
};

var getYear = function(id) {
    return '20' + (id+'').substr(0,2);
};

var getSchool = function(id) {
    var schoolId = parseInt((id+'').substr(2,1));

    if(schoolId == 7)
        return 'Deer Path Middle School';

    if(schoolId == 8)
        return 'Lake Bluff Middle School';

    if(schoolId == 2)
        return 'Lake Forest Country Day School';

    return 'Other School';
};

var getUID = function(id) {
    return (id+'').substr(3,6);
};
