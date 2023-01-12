"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./dto/user.dto");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const image_entity_1 = require("../room/entities/image.entity");
const profile_entity_1 = require("./entities/profile.entity");
const config_1 = require("@nestjs/config");
const AWS = require("aws-sdk");
const common_2 = require("@nestjs/common");
const path = require("path");
let UserService = class UserService {
    constructor(userRepository, imageRepository, profileRepository, configService) {
        this.userRepository = userRepository;
        this.imageRepository = imageRepository;
        this.profileRepository = profileRepository;
        this.configService = configService;
        this.awsS3 = new AWS.S3({
            accessKeyId: this.configService.get('AWS_S3_ACCESS_KEY'),
            secretAccessKey: this.configService.get('AWS_S3_SECRET_KEY'),
            region: this.configService.get('AWS_S3_REGION'),
        });
        this.S3_BUCKET_NAME = this.configService.get('AWS_S3_BUCKET_NAME');
    }
    async GetUserId(userDto, res) {
    }
    async signUp(userDto, folder, file) {
        const { userid, password, nickname } = userDto;
        const isUserExist = await this.userRepository.findOne({
            where: { userid: userDto.userid },
        });
        if (isUserExist) {
            throw new common_1.UnauthorizedException('이미 존재하는 아이디입니다.');
        }
        try {
            const key = `${folder}/${Date.now()}_${path.basename(file.originalname)}`.replace(/ /g, '');
            const s3Object = await this.awsS3
                .putObject({
                Bucket: this.S3_BUCKET_NAME,
                Key: key,
                Body: file.buffer,
                ACL: 'public-read',
                ContentType: file.mimetype,
            })
                .promise();
            const newuser = await this.userRepository.create();
            const hashedPassword = await bcrypt.hash(password, 10);
            newuser.userid = userid;
            newuser.password = hashedPassword;
            const user = await this.userRepository.save(newuser);
            const newProfile = await this.profileRepository.create();
            newProfile.nickname = nickname;
            newProfile.user = user;
            const imagePath = `https://${this.S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
            const newimage = await this.imageRepository.create();
            newimage.image = imagePath;
            newimage.type = false;
            await this.imageRepository.save(newimage);
            newProfile.image = newimage;
            const profile = await this.profileRepository.save(newProfile);
            return {
                nickname: profile.nickname,
                userid: user.id,
                image: newimage.image,
                level: profile.level,
                rank: profile.rank,
                introduction: profile.introduction,
            };
        }
        catch (error) {
            throw new common_2.BadRequestException(`File upload failed : ${error}`);
        }
    }
    async uploadImg(UserDto, folder, files) {
        const key1 = `${folder}/${Date.now()}_${path.basename(files[0].originalname)}`.replace(/ /g, '');
        const key2 = `${folder}/${Date.now()}_${path.basename(files[1].originalname)}`.replace(/ /g, '');
        const imagePath1 = `https://${this.S3_BUCKET_NAME}.s3.amazonaws.com/${key1}`;
        const imagePath2 = `https://${this.S3_BUCKET_NAME}.s3.amazonaws.com/${key2}`;
        try {
            const s3Object = await this.awsS3
                .putObject({
                Bucket: this.S3_BUCKET_NAME,
                Key: key1,
                Body: files[0].buffer,
                ACL: 'public-read',
                ContentType: files[0].mimetype,
            })
                .promise();
        }
        catch (error) {
            throw new common_2.BadRequestException(`File upload failed : ${error}`);
        }
        try {
            const s3Object = await this.awsS3
                .putObject({
                Bucket: this.S3_BUCKET_NAME,
                Key: key2,
                Body: files[1].buffer,
                ACL: 'public-read',
                ContentType: files[1].mimetype,
            })
                .promise();
        }
        catch (error) {
            throw new common_2.BadRequestException(`File upload failed : ${error}`);
        }
        const newimage = await this.imageRepository.create();
        newimage.image = imagePath1;
        newimage.frameImage = imagePath2;
        newimage.type = true;
        await this.imageRepository.save(newimage);
        return newimage;
    }
};
__decorate([
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, Object]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "GetUserId", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, String, Object]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "signUp", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Array]),
    __metadata("design:returntype", Promise)
], UserService.prototype, "uploadImg", null);
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(image_entity_1.Image)),
    __param(2, (0, typeorm_1.InjectRepository)(profile_entity_1.Profile)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        config_1.ConfigService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map