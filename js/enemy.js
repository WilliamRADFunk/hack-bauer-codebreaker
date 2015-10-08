function isPlayerClose(enemy)
{
	var xDiff = Math.abs(enemy.entity.position.x - player.position.x);
	var xSqr = (xDiff * xDiff);
	var yDiff = Math.abs(enemy.entity.position.y - player.position.y);
	var ySqr = (yDiff * yDiff);
	var Difference = Math.sqrt( xSqr + ySqr );

	if(Difference <= 150)
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
			if(axisDiff(enemy, "x") <= enemy.strideLength)
			{
				enemy.entity.translateOnAxis( new THREE.Vector3(0, -1, 0), enemy.strideLength );
			}
			else if(axisDiff(enemy, "y") <= enemy.strideLength)
			{
				enemy.entity.translateOnAxis( new THREE.Vector3(-1, 0, 0), enemy.strideLength );
			}
			else
			{
				enemy.entity.translateOnAxis( new THREE.Vector3(-1, -1, 0), enemy.strideLength );
			}
		}
		else if(playerY > enemyY)
		{
			if(axisDiff(enemy, "x") <= enemy.strideLength)
			{
				enemy.entity.translateOnAxis( new THREE.Vector3(0, 1, 0), enemy.strideLength );
			}
			else if(axisDiff(enemy, "y") <= enemy.strideLength)
			{
				enemy.entity.translateOnAxis( new THREE.Vector3(-1, 0, 0), enemy.strideLength );
			}
			else
			{
				enemy.entity.translateOnAxis( new THREE.Vector3(-1, 1, 0), enemy.strideLength );
			}
		}
		else
		{
			enemy.entity.translateOnAxis( new THREE.Vector3(1, 0, 0), enemy.strideLength );
		}
	}
	else if(playerX > enemyX)
	{
		if(playerY < enemyY)
		{
			if(axisDiff(enemy, "x") <= enemy.strideLength)
			{
				enemy.entity.translateOnAxis( new THREE.Vector3(0, -1, 0), enemy.strideLength );
			}
			else if(axisDiff(enemy, "y") <= enemy.strideLength)
			{
				enemy.entity.translateOnAxis( new THREE.Vector3(1, 0, 0), enemy.strideLength );
			}
			else
			{
				enemy.entity.translateOnAxis( new THREE.Vector3(1, -1, 0), enemy.strideLength );
			}
		}
		else if(playerY > enemyY)
		{
			if(axisDiff(enemy, "x") <= enemy.strideLength)
			{
				enemy.entity.translateOnAxis( new THREE.Vector3(0, 1, 0), enemy.strideLength );
			}
			else if(axisDiff(enemy, "y") <= enemy.strideLength)
			{
				enemy.entity.translateOnAxis( new THREE.Vector3(1, 0, 0), enemy.strideLength );
			}
			else
			{
				enemy.entity.translateOnAxis( new THREE.Vector3(1, 1, 0), enemy.strideLength );
			}
		}
		else
		{
			enemy.entity.translateOnAxis( new THREE.Vector3(1, 0, 0), enemy.strideLength );
		}
	}
	else
	{
		if(playerY < enemyY)
		{
			enemy.entity.translateOnAxis( new THREE.Vector3(0, -1, 0), enemy.strideLength );
		}
		else if(playerY > enemyY)
		{
			enemy.entity.translateOnAxis( new THREE.Vector3(0, 1, 0), enemy.strideLength );
		}
		else
		{
			enemy.entity.translateOnAxis( new THREE.Vector3(0, 0, 0), enemy.strideLength );
		}
	}
}

function axisDiff(enemy, axis)
{
	if(axis === "x")
	{
		if(enemy.entity.position.x < 0 && player.position.x > 0)
		{
			return (Math.abs(enemy.entity.position.x) + player.position.x);
		}
		else if(player.position.x < 0 && enemy.entity.position.x > 0)
		{
			return (Math.abs(player.position.x) + enemy.entity.position.x);
		}
		else
		{
			return (Math.abs(player.position.x - enemy.entity.position.x));
		}
	}
	else if(axis === "y")
	{
		if(enemy.entity.position.y < 0 && player.position.y > 0)
		{
			return (Math.abs(enemy.entity.position.y) + player.position.y);
		}
		else if(player.position.y < 0 && enemy.entity.position.y > 0)
		{
			return (Math.abs(player.position.y) + enemy.entity.position.y);
		}
		else
		{
			return (Math.abs(player.position.y - enemy.entity.position.y));
		}
	}
	else
	{
		return 0;
	}
}