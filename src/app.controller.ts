import {
  Body,
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  UseInterceptors,
  CACHE_MANAGER,
  CacheKey
} from '@nestjs/common';
import { AppService } from './app.service';
import Cache from 'cache-manager';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/cache')
  async addToCache(@Body() cacheEntry: any) {
    await this.appService.addToCache(cacheEntry.key, cacheEntry.item);
  }

  @Get('/cache/:key')
  async getFromCache(@Res() response, @Param('key') key) {
    const value = await this.appService.getFromCache(key);
    console.log(value)
    return response.status(HttpStatus.OK).json(value);
  }

  @UseInterceptors(CacheInterceptor) // Automatically cache the response for this endpoint
  @CacheKey('custom-key')
  @CacheTTL(30) // override TTL to 30 seconds
  @Get('/:id')
  async getPokemon(@Param('id') id: number): Promise<string> {
    return await this.appService.getPokemon(+id);
  }
}
