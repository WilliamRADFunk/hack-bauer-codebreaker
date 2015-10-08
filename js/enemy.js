function isPlayerClose(enemy)
{
	var xDiff = Math.abs(enemy.entity.position.x - player.position.x);
	var xSqr = (xDiff * xDiff);
	var yDiff = Math.abs(enemy.entity.position.y - player.position.y);
	var ySqr = (yDiff * yDiff);
	var Difference = Math.sqrt( xSqr + ySqr );

	if(Difference <= 100)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function chase(enemy)
{
	var enemyX = enemy.entity.position.x;
	var enemyY = enemy.entity.position.y;
	var playerX = player.position.x;
	var playerY = player.position.y;
	if(playerX < enemyX)
	{
		if(playerY < enemyY)
		{
			enemy.entity.position.set( (enemyX - enemy.strideLength), (enemyY - enemy.strideLength), WALL_HEIGHT / 4);
		}
		else if(playerY > enemyY)
		{
			enemy.entity.position.set( (enemyX - enemy.strideLength), (enemyY + enemy.strideLength), WALL_HEIGHT / 4);
		}
		else
		{
			enemy.entity.position.set( (enemyX - enemy.strideLength), enemyY, WALL_HEIGHT / 4);
		}
	}
	else if(playerX > enemyX)
	{
		if(playerY < enemyY)
		{
			enemy.entity.position.set( (enemyX + enemy.strideLength), (enemyY - enemy.strideLength), WALL_HEIGHT / 4);
		}
		else if(playerY > enemyY)
		{
			enemy.entity.position.set( (enemyX + enemy.strideLength), (enemyY + enemy.strideLength), WALL_HEIGHT / 4);
		}
		else
		{
			enemy.entity.position.set( (enemyX + enemy.strideLength), enemyY, WALL_HEIGHT / 4);
		}
	}
	else
	{
		if(playerY < enemyY)
		{
			enemy.entity.position.set( enemyX, (enemyY - enemy.strideLength), WALL_HEIGHT / 4);
		}
		else if(playerY > enemyY)
		{
			enemy.entity.position.set( enemyX, (enemyY + enemy.strideLength), WALL_HEIGHT / 4);
		}
		else
		{
			enemy.entity.position.set( enemyX, enemyY, WALL_HEIGHT / 4);
		}
	}
}