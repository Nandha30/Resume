var csrfcookieval="crmcsrfparam="+getCSRFCookie();
var zgidval = SupportUI.CurrentPortal.zgid;
var depval = SupportUI.Departments.getActiveDepartmentObj()[0].depid;
var dataval = '{"firstName":"","lastName":"Anonymous","associatedDepartmentIds":["'+depval+'"],"associatedChatDepartmentIds":[""],"perType":"Admin","aboutInfo":"","mobile":"","phone":"","extn":"","langCode":"en_US","timeZone":"Asia/Kolkata","countryCode":"en_US","status":"ACTIVE","emailId":"nandhakumar.s+hack@zohocorp.com"}'
dataval = JSON.parse(dataval);
jQuery.ajax({url:'http://nandha-zt82.tsi.zohocorpin.com:8708/api/v1/agents?orgId='+zgidval,type:'post',data: JSON.stringify(dataval),
            contentType: "application/json; charset=utf-8",headers:{"X-ZCSRF-TOKEN":csrfcookieval}});
