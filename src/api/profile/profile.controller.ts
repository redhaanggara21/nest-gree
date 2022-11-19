import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '@/utill';

@Controller('profile')
export class ProfileController {

  constructor(
    private readonly service: ProfileService
  ) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.service.create(createProfileDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.service.update(+id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }

  @Post('/profile-create')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './upload-files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async profileCreate(
    @UploadedFile() file,
    @Body() body: CreateProfileDto
  ) {
    const newProfiles = new CreateProfileDto();
    newProfiles.photo = file.filename;
    newProfiles.user_id = body.user_id;
    // const response = {
    //   originalname: file.originalname,
    //   filename: file.filename,
    // };
    const response = this.service.create(newProfiles);
    return response;
  }

  @Post('multiple')
  @UseInterceptors(
    FilesInterceptor('image', 20, {
      storage: diskStorage({
        destination: './upload-files/images',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFiles(@UploadedFiles() files: any) {
    const response = [];
    files.forEach(file => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
      };
      response.push(fileReponse);
    });
    return response;
  }

  @Get('image/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    console.log(image);
    return res.sendFile(image, { root: './upload-files/images' });
  }
}
