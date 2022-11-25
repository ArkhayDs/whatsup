<?php

namespace App\Factory;

use App\Entity\Topic;
use App\Repository\TopicRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

/**
 * @extends ModelFactory<Topic>
 *
 * @method static Topic|Proxy createOne(array $attributes = [])
 * @method static Topic[]|Proxy[] createMany(int $number, array|callable $attributes = [])
 * @method static Topic[]|Proxy[] createSequence(array|callable $sequence)
 * @method static Topic|Proxy find(object|array|mixed $criteria)
 * @method static Topic|Proxy findOrCreate(array $attributes)
 * @method static Topic|Proxy first(string $sortedField = 'id')
 * @method static Topic|Proxy last(string $sortedField = 'id')
 * @method static Topic|Proxy random(array $attributes = [])
 * @method static Topic|Proxy randomOrCreate(array $attributes = [])
 * @method static Topic[]|Proxy[] all()
 * @method static Topic[]|Proxy[] findBy(array $attributes)
 * @method static Topic[]|Proxy[] randomSet(int $number, array $attributes = [])
 * @method static Topic[]|Proxy[] randomRange(int $min, int $max, array $attributes = [])
 * @method static TopicRepository|RepositoryProxy repository()
 * @method Topic|Proxy create(array|callable $attributes = [])
 */
final class TopicFactory extends ModelFactory
{
    public function __construct()
    {
        parent::__construct();

        // TODO inject services if required (https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#factories-as-services)
    }

    protected function getDefaults(): array
    {
        return [
            // TODO add your default values here (https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#model-factories)
        ];
    }

    protected function initialize(): self
    {
        // see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
        return $this
            // ->afterInstantiate(function(Topic $topic): void {})
        ;
    }

    protected static function getClass(): string
    {
        return Topic::class;
    }
}
