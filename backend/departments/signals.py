from django.db.models.signals import post_migrate
from django.dispatch import receiver
from .models import Department

@receiver(post_migrate)
def create_default_departments(sender, **kwargs):
    if sender.name == 'departments': 
        default_departments = [
            {"name": "Отдел разработки", "description": "Отдел, занимающийся разработкой продуктов"},
            {"name": "Отдел маркетинга", "description": "Отдел, занимающийся продвижением продуктов"},
            {"name": "Отдел кадров", "description": "Отдел, занимающийся управлением персоналом"},
            {"name": "Финансовый отдел", "description": "Отдел, занимающийся управлением финансами компании"},
            {"name": "Юридический отдел", "description": "Отдел, обеспечивающий юридическую поддержку компании"},
            {"name": "Отдел ИТ", "description": "Отдел, отвечающий за информационные технологии"},
            {"name": "Логистический отдел", "description": "Отдел, занимающийся транспортировкой и складированием"},
            {"name": "Отдел закупок", "description": "Отдел, отвечающий за приобретение материалов и ресурсов"},
            {"name": "Отдел продаж", "description": "Отдел, занимающийся продажей продукции компании"},
            {"name": "Отдел дизайна", "description": "Отдел, занимающийся разработкой визуального стиля и дизайна"},
            {"name": "Отдел исследований", "description": "Отдел, занимающийся проведением научных исследований"},
            {"name": "Отдел обучения", "description": "Отдел, занимающийся подготовкой и обучением сотрудников"},
            {"name": "Отдел качества", "description": "Отдел, контролирующий качество продукции и услуг"},
            {"name": "Отдел безопасности", "description": "Отдел, отвечающий за безопасность сотрудников и компании"},
            {"name": "PR-отдел", "description": "Отдел, занимающийся связями с общественностью"},
            {"name": "Отдел аналитики", "description": "Отдел, анализирующий данные и помогающий в принятии решений"},
            {"name": "Отдел поддержки клиентов", "description": "Отдел, работающий с запросами и жалобами клиентов"},
            {"name": "Отдел инноваций", "description": "Отдел, занимающийся внедрением новых технологий"},
            {"name": "Производственный отдел", "description": "Отдел, отвечающий за производство продукции"},
            {"name": "Отдел стратегического планирования", "description": "Отдел, разрабатывающий долгосрочные стратегии компании"},
        ]

        for department in default_departments:
            Department.objects.get_or_create(
                name=department['name'],
                defaults={"description": department['description']}
            )