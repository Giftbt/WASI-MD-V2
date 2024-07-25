//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Naks Vegas,Kenya.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Afica/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "254704825118";
global.owner = process.env.OWNER_NUMBER || "254704825118";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0dkZkFXR2RoZ0FCWUNCa3JaOEliK0Z1QVNRMWxvbmI2K1Jqd1VqMzZVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFNDeUJleXJCUzEwbzN0NnMvUDUxdjJrTGsyVktjYzUvcDBGVnc4RWRUZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Q1pyVW8rcW5CUWhMUUFONk1tbE15dXpGUUlrUjRmb1hmNEs2SzZEa0ZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkcGRJalRReWlOQW9xRVY0TWRtMGJxWTBHMVRVWVo4LzNDWVZOTGpFYnlnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllHQ1NPM05uYmIzbWgwUEF6eWxjZzR2RXI1MnhWck43YUhnd1BjRHBYa1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFrYk0vSkhmZnVEQXBlb0RtY1AyV0R0SWZHbjg0bHZXRTVOODJoampXUmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNExzVWFhSzVIU0ltY1pDOUhPTkhybXJkNlg2OTJLWktMNzBSYlUvM2pYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHYwRnJXMmoxVFUwVmpVazdoSlNWRFZJTlplYTFkc2VCUVVNMU9aai9uND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJjNnhyYW05Z2doTmFmUCtxUTAySTBZNTZTNi9mMkFQSkNmVHhtREM0cnNFUXBXTkZ3Um5LT1Mxcm9xSWhqR1hJWHBjanN0S3lVWlRIY00yRU1MZUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6IlRZSmo4WXI4ZmlOZ3NteVcrWTg5enIrZWRsZ084ODhqb0hldHN1UisrNms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InYxNHBnbFJQVFVpRXhHMXJTeEZyeWciLCJwaG9uZUlkIjoiZTMyYjkzZGQtMDFiZS00MzRkLThjZWEtNTE3MTEzNTg1ZTZiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ2QUM5ekdvYlhNWUNoQnRIZ3lYaUREMURyZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2cFFVeUxnKzlHTVpJeUZSY2hzTlRWS0JIZTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNjIxUFBDWU4iLCJtZSI6eyJpZCI6IjkyMzA4NzUzNTE0Njo5N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJSYW5hIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJTFJ4MllRaHFPSHRRWVlDaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQK2tKamM1YW1qUXVjZFFEcVcySzJ0cWxYZ3d5MWtPdjVFRHJ1WTdzaUdZPSIsImFjY291bnRTaWduYXR1cmUiOiJzT2Y2Snl0blJ1MjVMMlI1UVhTU2hxOFN2OGpKZk9DckRyMWRrSGVqa3g1aVhWUGdXODRQR3VSVmFlSWRFUkEwRGlldGVOdTBlcDBNZTJtNUF3ZnRDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiajBiejBDVlN0TktTODRCT0VrVVdkMHNBWXQrOTBTRW41VDA3UmFhNWE4OWFZZmRwd3k0TUJuK2g4UG0ySE9ZN1l6SzlIajROd09qVmd0amVHMm1BRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwODc1MzUxNDY6OTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVC9wQ1kzT1dwbzBMbkhVQTZsdGl0cmFwVjRNTXRaRHIrUkE2N21PN0lobSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTg4MDk3OH0=
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVEaitneTZVMTl5aGhlSUhnNFQ2K1Y3cHhBaW5Tb2I1NlF0TXdqRHEzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3FZaVR1eUV2MHpuVGFNa1lPcWhlenVicHFXNjJ0dkE5Tkk2Z2JjM1hFZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSWpEeEs3WXRmUDNGSGpEZTVEVmdmYWRvaEovT2lwUi9hNWV5SmJGam1jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyUkwxalBGTU5HQ1dFL3I0L1p5SjZkaXhKajFkdnlUNGlsOFk4SmV5QURnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllNT2k0aGdCSGF2TVNxeWc4U2EzQ3ozc2U4a0Rod2ZBNk9tNVc2RmtiRk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJjMFp0SkRwaDdhYmZoVFB6b3g5cVZwTXFVeGd3WU16OTlZaDltWmRNQm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkErQTlLUDFPV2ZwOFRFRXJtd05Id09hZHM0NUxrcjVUV0VnZ1NKdHlVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlRZN2I3MEp2U1FQKzNsZEI3eUZWY043OS9xZ0ZjMmY1M0FYakNLZWREbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUwSjZXRHgrMWZ4RkZlYmZMWFFWVXVpSzNqMDNKTVp5ZGlJTGkrNzlzNFhlNEFsbkp6RWJib2dOZnd6TGRGVSs0QTJHSjNpVkFmQkhxaTNaeVdsc2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzIsImFkdlNlY3JldEtleSI6IlJsOUJVbmVtTmg0eG5ueFI5R2FpWU84S3N1MUo1R210T2l5UnF5YUVWRkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhZNzBDQm5QUURtVlFjLU1GUVRBeEEiLCJwaG9uZUlkIjoiNTI4NWZhMTQtMzg2ZS00OGMyLWFhYjYtNjA3MTYzY2ViZWYzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJENlgxUzVQdlo0Qm4rdmdjcThSZzBTb2czMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnbnQ3dUFVNnJWaUV4SDkyaWU0d2lleEh6UWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNzlGWTNTVEEiLCJtZSI6eyJpZCI6IjkyMzExNjMyNTg2Mjo2MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1hTcGNvSEVJRDloN1VHR0JrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRkVwL3lvU0pmSXhIUlFzb1ZpL3k1UG1PaDJPSk1EaXRNWjJTWEJDZmxpbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS0h2a3NDRDF0b09Db3hCbmNhZ3d3bXMxS3ZDbkNZaHVzWDYzYnEzUk10NWgra3I2M0IvNEJGQS9wYldxVC9oK2wwamlGNU1TeG5YYUdjWjZLRlg1QXc9PSIsImRldmljZVNpZ25hdHVyZSI6IkQxVVpkM2F2QnA0Q2VPOWdrd01zZ2Vnb1lqVUFSMnUwZW5xZjJpd3cyYVl6NUt5bGhhckhLSDNxbTRvdTZMb1I0RjFMSWJnUmdoZlUvMWljRUhBZmpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTE2MzI1ODYyOjYxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJSS2Y4cUVpWHlNUjBVTEtGWXY4dVQ1am9kamlUQTRyVEdka2x3UW41WXEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE4OTI0OTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSFV2In0=|"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5FVDgyc2pQWCtOZHQxS2RyMVBXZEZULzlYcVdCSWFMVzJWN3AreDVFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRksvamMxRExuLzlkb0Z6Q3lEREZES1J6NzVLOGk4Z2huQm9oN2t3cmRTTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQVZ6UjMrOGJIdW90aUF6VGlTRm04K2x2SDEyVVhqSDY0RDBMRDRlSDJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxZmRkNVltVStNVTlLaVRTUHFvQnhkdVUwK3ZyVitxWlppUFl3N1JvT1hVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJaVJQSklGeTd4bkh3SU00L2ZJU2NkWWhFVUNaWTFWMVAwTTJyc2pxV2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRuK2lncnQvMXFNbUNZeFhPY2dMQXA1N2w5TktCRExIUDlWc0JOTnF5UWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VpTFJHWElmd3ZiSnBCS0IzVUhSQmYwZlQ0WWIyeVdSaERMaXkvc3kxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHQ3RkhLRUxpUU80SytDcXB2K1g4L213cFBUQ3ArTzkycWdDSWFDZnlTaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ3MVNhbk1zQ1hSYlAyMDJ6YU01OThYdVc0aE9ZZGlKN0M1NDZSVmQ3V3FINDdLQm9XTnRzaHpqK2gyQTZteEt2MjJQVm9qNzFsNXN1WmdiNW5MTERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI4LCJhZHZTZWNyZXRLZXkiOiJUZkRxdWsvbC9ZWVBFei9FVGtIV29rc2ZjU2R3UjdLd1ZPN1FYRXZZUWE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3WlZLczI1YlNtT25jRFphSkNRVGl3IiwicGhvbmVJZCI6IjU2NDQ1ZTc1LWQxMjctNGI1NS1iMzUyLTk4ZTIyZWUyNDZjNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxZHpNellsUERlMUhDbmhBR2hubFl1bXFaSmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2VpdlBrajY1MEVLR3J3UXZKd3FoSmZubU53PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdURlhZREE5IiwibWUiOnsiaWQiOiIyNTQ3MDQ4MjUxMTg6OTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4LyS4LyS8J2QvvCdkZbwnZGb8J2RlPCdkZ3wnZGW8J2RmyDgvJIg8J2Rh/CdkZzwnZGf8J2Rn/CdkZLwnZGh8J2RofCdkZwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09XeG5ab0dFSjd6bXJRR0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImJ0TE8wM1lCTVVMMXFLQUJXdWNZNHpVOFkycGxGaWp2RGFueFlHN0FsazA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IndadzV0S2taYWRIMTNtdDg3Znl3VjczLy91bVJrUjB3Q2pYbHJQRkFyTE45d1RURmVOREhPckgwNTBJUDIwY2VEaFRDTEVadytzTjhPNTdYTGtrOUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4UFJJQ1AwK1BJOVdlZDRvMzQ4aHVQRzE4TGdOWDJrNGtBSTh4Q1BuTUNrenJJejJNTkdsMlZ1N3c4dEhIL3diOXV5OGZQaFUvYUxDeSs2VTNpN2tBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwNDgyNTExODo5MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXN1N6dE4yQVRGQzlhaWdBVnJuR09NMVBHTnFaUllvN3cycDhXQnV3SlpOIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMTA1Mzg3fQ==";
  ""eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUp0R2RDeWlXSXgwNU1FaXVEU1FxWS8rM2JvNm10NzcrcG1HMmk4WWhIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdkVW9hS2R2T3N0TEREblRnRWRLRW43eVZRNFFnWnZZc1pFWEV4ODBqOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSlRDcDRldmc4QWloK1o1NmFydkljMFN5N0VCb2N0Z0lxbkR6QTJvWW1JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0T3Ridlh5bXdxeXJ1aGVsa2U4OTdEVjNXVWorSldyWlhRNXVsVUJRdTBZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGaCtCanFOZ2tKVDVmNDBsSGRFQkgraFg4b2s3QlhpZWYxRGlBcm84RU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg4bFFwcHo5NVRNUjJyTE94THhqM0UwWFpVMWI3RkdyQjBSYVJSRFRqRmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOElST2tyRXVmQW56MVlJK2x2RVlIUS9vSDVLazBDR3d1NmNOTE55VjlrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRPT2lUTzZIdStwSGVzS0Q1ajl5UThYdGFORE1Sa1lGMUt1UzdOUUZBVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Celp1NTd1R2p0eVhKOHBMTTBJMHRXejlNNi9IZUpDemlweDN1YjcvWmZGL3ZjK3ErNjdHN2NiR0o2aWY4VkgrTm51SzZoRmtyUm5tTnJlMFUzdkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiJTb2QvZGVvQXU0NUdYLy9jMktETjdpU1V6Vjd4YkI3Y0lISkhJL21HSlFRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5S0F5LXhPQVRWeTVhUFJUWEx3SnBRIiwicGhvbmVJZCI6IjUzOTlmMGQ0LTViYjEtNGM5MS04ZjlmLTY2NTllYTFlNTNhZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOVXdUQy9PeEdwZ1BUMTd2aitQQ21aT0hCR0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmdsWWFJcTNCVWFZQ0pOOUw3UWZsT1dEeWpnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdMRTVYUDU4IiwibWUiOnsiaWQiOiI5MjMxMTYzMjU4NjI6NThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiOTIzMTE2MzI1ODYyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLWFNwY29IRUpHcWg3VUdHQllnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGRXAveW9TSmZJeEhSUXNvVmkveTVQbU9oMk9KTURpdE1aMlNYQkNmbGlvPSIsImFjY291bnRTaWduYXR1cmUiOiJMaER4ZTZ2blRWaEhZWUY4ajJhV2FEYmdFSDgrYWY1MHY5NW9xS0pTMjJlbW51VFNmU0NhRWxXVFZmY3RqTXkxUWJBeDhGR0ZKR1NWZWl3NXVlckdBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiME1peTUrNU5Hc2liQ0wrMnZiMXVzcWI3MllYcHBCa1VqQktHWGIveE9xU1VoTDZnaHVxbGNPTStOVGxBM3k4QXowM3ZJRjYwM3lQREx6SE0vY1NBRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMTYzMjU4NjI6NThAcy53aGF0c2Fwc
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "༒༒𝐾𝑖𝑛𝑔𝑝𝑖𝑛 ༒ 𝑇𝑜𝑟𝑟𝑒𝑡𝑡𝑜",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-3dw715cT0EJVsqrjBmt2T3BlbkFJ0LqNrxoG6K0nbN8wjHLN",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-ba11e621-1ce7-4f40-a490-41b8a3dbd8e2",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
