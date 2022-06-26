import { Exclude } from 'class-transformer';

import { DtoDatetime, DtoProp, DtoString } from '@shared/decorators/dto.decorator';

class sourceNew {
	@DtoString({ expose: true })
	id: string;

	@DtoString({ expose: true })
	name: string;
}
@Exclude()
export class addCommentREqDto {
	@DtoString({ expose: true, maxLength: 512 })
	url: string;

	@DtoString({ expose: true, optional: true })
	id: string;

	@DtoString({ expose: true, maxLength: 60 })
	comment: string;

	@DtoString({ expose: true, maxLength: 512 })
	author: string;

	@DtoString({ expose: true, maxLength: 512 })
	title: string;

	@DtoString({ expose: true, maxLength: 1500 })
	description: string;

	@DtoString({ expose: true, maxLength: 1500 })
	content: string;

	@DtoProp(true, { type: sourceNew })
	source: sourceNew;

	@DtoString({ expose: true, maxLength: 512 })
	urlToImage: string;

	@DtoDatetime({ expose: true, optional: true })
	publishedAt: Date;
}

@Exclude()
export class getListCommentReqDto {
	@DtoString({ expose: true, maxLength: 512 })
	url: string;
}
